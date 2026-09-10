const db = require("../utils/db");
const buses = require("../models/buses");

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


module.exports={
    allBuses,
    addBuses
}