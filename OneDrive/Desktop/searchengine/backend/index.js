
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://harshita1:HV8WXEqwmkGdfP0o@harshita.c31chtf.mongodb.net/searchengine?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  
}).then(()=> console.log("mongodb is connected" )).catch((err)=>console.log("err occur"))

// schema 
const searchSchema = new mongoose.Schema({
    content: String,
  });
  
  const SearchItem = mongoose.model('SearchItem', searchSchema);
  
  // Endpoint to handle search queries
  app.post('/api/search', async (req, res) => {
    const { query } = req.body;
    try {
      const results = await SearchItem.find({ content: { $regex: query, $options: 'i' } });
      res.json(results);
      console.log(results)
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  