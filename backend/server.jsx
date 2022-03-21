const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const appRoutes = require('./routes/appRoutes');
require('dotenv').config();
const auth = require('./routes/auth')

//app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE,{
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
  .then(() => console.log('DB Connected'));

  //middlewares
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', auth);
app.use('/api', appRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});