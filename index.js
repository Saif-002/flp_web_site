const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/env', (req, res) => {
  res.json({
    apiKey: process.env.API_KEY,
  });
});

app.get('/registration_form',(req,res)=>{
  res.render('registration_form')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
