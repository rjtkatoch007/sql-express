const express = require('express');
const db = require('./utils/db');
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const app = express();
const port = 3000;

//models
require('./models')
//const userModel = require('./models/users');
//const busesModel = require('./models/buses');

// Function to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use(express.json());
app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

db.sync({force:false}).then(()=>{
    app.listen(port, (err)=>{
    console.log(`Server is running`);
    })
}).catch((err)=>{
    console.log(err);
})
