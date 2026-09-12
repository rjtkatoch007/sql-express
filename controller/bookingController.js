const db = require("../utils/db");
const Booking = require('../models/bookings');
const User = require('../models/users');
const Bus = require('../models/buses');

const createBooking = async (req, res) => {
    try {
        const {
            userId,
            busId,
            seatNumber
        } = req.body;

        // Check user
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Check bus
        const bus = await Bus.findByPk(busId);

        if (!bus) {
            return res.status(404).json({
                message: "Bus not found"
            });
        }

        // Create booking
        const booking = await Booking.create({
            userId,
            busId,
            seatNumber
        });

        res.status(201).json(booking);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};



module.exports = {
    createBooking
}