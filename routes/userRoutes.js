const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");


router.get('/all', userController.getAllUsers)
router.post('/add', userController.addUser);
router.post('/addingUserWithPosts', userController.addingValuesToUserAndPosts);
router.get("/:id/bookings", userController.getUserBookings);

module.exports = router;