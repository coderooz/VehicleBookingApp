const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookingRoutes = require('./routes/bookings');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
