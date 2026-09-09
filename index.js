const express = require('express');
const db = require('./utils/db-connection');
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
const port = 3000;


// Function to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/users", userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});