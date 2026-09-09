const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get('/all', userController.allEntry)
router.post('/add', userController.addEntry);
router.put('/update/:id', userController.updateEntry);
router.delete('/delete/:id', userController.deleteEntry);

module.exports = router;