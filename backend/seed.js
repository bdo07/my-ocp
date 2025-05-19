const mongoose = require('mongoose');

// الاتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost:27017/OCP')
  .then(() => console.log('✅ Connected to MongoDB for seeding'))
  .catch((err) => console.log('❌ MongoDB connection error:', err));

// النموذج الصحيح للفنادق (يجب أن يطابق backend)
const hotelSchema = new mongoose.Schema({
  name: String,
  image: String,
  rooms: [
    {
      type: {
        type: String
      },
      price: Number
    }
  ]
});

const Hotel = mongoose.model('Hotel', hotelSchema);

// بيانات تجريبية
const hotels = [
  {
    name: 'فندق الشمس',
    image: 'https://via.placeholder.com/150',
    rooms: [
      { type: 'مزدوجة', price: 500 },
      { type: 'ثلاثية', price: 750 },
    ],
  },
  {
    name: 'فندق القمر',
    image: 'https://via.placeholder.com/150',
    rooms: [
      { type: 'جناح', price: 1200 },
      { type: 'مفردة', price: 300 },
    ],
  },
];

// إدخال البيانات
Hotel.insertMany(hotels)
  .then(() => {
    console.log('✅ تم إدخال البيانات بنجاح');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('❌ خطأ أثناء إدخال البيانات:', err);
    mongoose.disconnect();
  });
