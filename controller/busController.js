const db = require("../utils/db");
const Booking = require('../models/bookings');
const Bus = require('../models/buses');
const User = require('../models/users');

const allBuses = async (req, res)=>{
    try {
        const {seats: availableSeats} = req.params;
         // Query the database using Sequelize
        const buses = await Bus.findAll({
            attributes: ['busNumber'],
            where: {
                availableSeats: {
                    [Op.gt]: availableSeats // Op.gt represents the greater-than (>) operator
                }
            }
        });

        console.log("Available Buses");
        return res.status(200).json(buses);
        
        
    } catch (error) {
        res.status(500).send("Unable to find bus");
    }
    
}

const addBuses = async (req, res) =>{
    try {
        const {busNumber, totalSeats, availableSeats} = req.body;
        const buses = await Bus.create({
            busNumber:busNumber,
            totalSeats:totalSeats,
            availableSeats:availableSeats
        });
        res.status(201).send(`Bus with number: ${busNumber} is created!`);
        
    } catch (error) {
        res.status(500).send("Unable to add bus");
    }
    

}

const getBusBookings = async (req, res) => {
    try {
        const { id } = req.params;

        const bookings = await Booking.findAll({
            where: {
                busId: id
            },
            attributes: ["id", "seatNumber"],
            include: [
                {
                    model: User,
                    attributes: ["name", "email"]
                }
            ]
        });

        res.json(bookings);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


module.exports={
    allBuses,
    addBuses,
    getBusBookings
}