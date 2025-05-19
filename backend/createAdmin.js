require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

 const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: 'user' },   
});
const User = mongoose.model('User', userSchema);

async function createAdmin() {
  try {
    await mongoose.connect('mongodb://localhost:27017/OCP', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    const username = 'admin';           
    const plainPassword = 'admin123';   

     const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('⚠️ المستخدم موجود مسبقاً.');
      return process.exit(0);
    }

     const hashedPassword = await bcrypt.hash(plainPassword, 10);

     const adminUser = new User({
      username,
      password: hashedPassword,
      role: 'admin',   
    });

    await adminUser.save();
    console.log('✅ success');
    process.exit(0);
  } catch (err) {
    console.error('❌ erreur', err);
    process.exit(1);
  }
}

createAdmin();
