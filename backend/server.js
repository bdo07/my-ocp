require('dotenv').config(); // ← تأكد من وضعها في الأعلى
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

// الاتصال بـ MongoDB
mongoose.connect('mongodb://localhost:27017/OCP', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// ✅ دالة حماية المسارات
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token requis' });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token invalide' });
    req.user = user;
    next();
  });
}

// 🏨 نموذج الفندق
const hotelSchema = new mongoose.Schema({
  name: String,
  image: String,
  rooms: [
    {
      type: String,
      price: Number,
    },
  ],
});
const Hotel = mongoose.model('Hotel', hotelSchema);

// 👤 نموذج المستخدم
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// 📅 نموذج الحجز
const reservationSchema = new mongoose.Schema({
  hotelName: String,
  roomType: String,
  startDate: Date,
  endDate: Date,
  customerName: String,
  email: String,
  phone: String,
});
const Reservation = mongoose.model('Reservation', reservationSchema);

// ✅ تسجيل الدخول
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Utilisateur non trouvé' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, user: { username: user.username } });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
});

// ✅ API: الحصول على الفنادق
app.get('/api/hotels', authenticateToken, async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des hôtels' });
  }
});

// ✅ API: إضافة فندق
app.post('/api/hotels', authenticateToken, async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json({ message: 'Hôtel ajouté avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'hôtel' });
  }
});

// ✅ API: حجز غرفة
app.post('/api/reservation', authenticateToken, async (req, res) => {
  const { hotelName, roomType, startDate, endDate, customerName, email, phone } = req.body;

  const newReservation = new Reservation({
    hotelName,
    roomType,
    startDate,
    endDate,
    customerName,
    email,
    phone,
  });

  try {
    await newReservation.save();
    res.status(201).json({ message: 'Réservation créée avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création de la réservation' });
  }
});

// ✅ API: البحث عن الفنادق (لا يتطلب توكن)
app.get('/api/search', async (req, res) => {
  const { query, startDate, endDate } = req.query;

  try {
    const hotels = await Hotel.find({
      name: { $regex: query, $options: 'i' },
    });

    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    res.json({ hotels, nights });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la recherche' });
  }
});

// بدء الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
