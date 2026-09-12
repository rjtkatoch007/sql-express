const db = require("../utils/db");
const User = require('../models/users');
const Posts = require('../models/posts');
const Booking = require('../models/bookings');
const Bus = require('../models/buses');

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

const addingValuesToUserAndPosts = async (req,res) =>{
    try {
        const user = await User.create(req.body.user);
        const Post = await Posts.create({
            ...req.body.posts,
            UserId:user.id
        })

        res.status(201).send({user, Post});
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;

        const bookings = await Booking.findAll({
            where: {
                userId: id
            },
            attributes: ["id", "seatNumber"],
            include: [
                {
                    model: Bus,
                    attributes: ["busNumber"]
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

module.exports = {
    getAllUsers,
    addUser,
    addingValuesToUserAndPosts,
    getUserBookings
}