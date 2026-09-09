const express = require("express");
const router = express.Router();
const busController = require("../controller/busController");

router.get('/available/:seats', busController.allBuses);
router.post('/add', busController.addBuses);


module.exports = router;