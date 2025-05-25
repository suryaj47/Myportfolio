
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/adminDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('user', UserSchema); 


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  read: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Contact = mongoose.model('contact', contactSchema); 


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false });
  }
});
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ success: true, message: 'Message stored successfully' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, message: 'Failed to store message' });
  }
});


app.get('/admin-data', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ success: false });
  }
});
app.put('/mark-read/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndUpdate(id, { read: true });
    res.json({ success: true });
  } catch (err) {
    console.error('Error updating read status:', err);
    res.status(500).json({ success: false });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
