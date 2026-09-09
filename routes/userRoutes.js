const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get('/all', userController.getAllUsers)
router.post('/add', userController.addUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;