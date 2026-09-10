const db = require("../utils/db");
const User = require('../models/users');

const getAllUsers = async (req, res)=>{
    try {
        const users = await User.findAll();
        if(!users){
            res.status(404).send("Users not found");
        }        
        console.log(users.every(u => u instanceof User)); // true
        console.log('All Users:', JSON.stringify(users, null, 2));
        res.status(200).send(users); 
        
    } catch (error) {
         res.status(500).send("Unable to fetch users.");
    }
}

const addUser = async (req, res) => {
    try {
        const {email, name}=req.body;
        const user = await User.create({
            email:email,
            name:name
        });
        res.status(201).send(`User with name: ${name} is created!`);
    } catch (error) {
        res.status(500).send("Unable to make entry.");
    }
}


// --- NEW FUNCTION TO GET ALL USERS ---
/* const getAllUsers = (req, res) => {
    const selectQuery = `SELECT * FROM users`;

    db.execute(selectQuery, [], (err, results) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        console.log("Users retrieved successfully");
        res.status(200).json(results); // Returns the array of users as JSON
    });
};

const addUser = (req, res)=>{
    const {email, name} = req.body;
    const insertQuery = `INSERT INTO users (email, name) VALUES (?,?)`;

    db.execute(insertQuery,[email,name], (err)=>{
        if(err){
            console.log(err.message);
           res.status(500).send(err.message);
           db.end();
           return;
        }
        console.log("Value has been inserted");
        res.status(200).send(`User with name ${name} successfully added`);
    })
}

const updateUser = (req, res)=>{
    const {id} = req.params;
    const {email} = req.body;
    const updateQuery = `UPDATE users SET email=? WHERE id=?`;

    db.execute(updateQuery, [email, id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows===0){
            res.status(404).send("User not found");
            return;
        }

        console.log("User has been updated");
        res.status(200).send(`User successfully updated`);

    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    const deleteQuery = `DELETE FROM userS WHERE id= ?`;

    db.execute(deleteQuery, [id], (err)=>{
        if(err){
            console.log(err.message);
            res.status(404).send(err.message);
            db.end();
            return;
        }

        if(db.affectedRows===0){
            res.status(404).send("User not found");
            return;
        }

        console.log("Usere has been deleted");
        res.status(200).send(`User with id ${id} successfully deleted`);
    })
} */

module.exports = {
    getAllUsers,
    addUser,
    //updateUser,
    //deleteUser
}