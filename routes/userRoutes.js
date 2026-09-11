const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");


router.get('/all', userController.getAllUsers)
router.post('/add', userController.addUser);
router.post('/addingUserWithPosts', userController.addingValuesToUserAndPosts);
//router.put('/update/:id', userController.updateUser);
//router.delete('/delete/:id', userController.deleteUser);

module.exports = router;