const db = require("../utils/db-connection");

const allBuses = (req, res)=>{
    const {seats: availableSeats} = req.params;
    const getBuses = `SELECT busNumber FROM buses WHERE availableSeats > ?`;
    db.execute(getBuses, [availableSeats], (err, results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log("Available Buses");
        res.status(200).send(results);
    })
}

const addBuses = (req, res) =>{
    const {busNumber, totalSeats, availableSeats} = req.body;
    const addBusQuery = `INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?,?,?)`;

    db.execute(addBusQuery, [busNumber, totalSeats, availableSeats], (err)=>{
        if(err){
            console.log(err.message);
           res.status(500).send(err.message);
           db.end();
           return;
        }
        console.log("Bus has been inserted");
        res.status(200).send(`Bus with number ${busNumber} successfully added`);
    })   

}


module.exports={
    allBuses,
    addBuses
}