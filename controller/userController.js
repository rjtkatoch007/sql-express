const db = require("../utils/db-connection");

const allEntry = (req,res)=>{    
    const allQuery = `SELECT * FROM users`;

    db.execute(allQuery ,(err, results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log(results);
        res.status(200).send("Showing all users");
    })
}

const addEntry = (req, res)=>{
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

const updateEntry = (req, res)=>{
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

const deleteEntry = (req, res) => {
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
}

module.exports = {
    allEntry,
    addEntry,
    updateEntry,
    deleteEntry
}