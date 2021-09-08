  
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ exptended: true }));
app.use(cookieParser());

// ROUTES
app.use('/api/lots', require('./routes/lots'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

async function start() {
  try {
    await mongoose.connect('mongodb+srv://odmen:Andreyka1@cluster0.mys54.mongodb.net/prizemall?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch(e) {
    console.error('Server naebnulsa', e);
    process.exit();
  }
}

start();
