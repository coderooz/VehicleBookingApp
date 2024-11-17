const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { pickup, destination } = req.body;
    const newBooking = new Booking({ pickup, destination });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create booking' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch bookings' });
  }
};
