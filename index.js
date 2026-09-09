const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection has been created");

    // Function to create tables

  // Users table
  const usersTable = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )
  `;

  // Buses table
  const busesTable = `
    CREATE TABLE IF NOT EXISTS Buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber VARCHAR(255) NOT NULL,
      totalSeats INT NOT NULL,
      availableSeats INT NOT NULL
    )
  `;

  // Bookings table
  const bookingsTable = `
    CREATE TABLE IF NOT EXISTS Bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT NOT NULL
    )
  `;

  // Payments table
  const paymentsTable = `
    CREATE TABLE IF NOT EXISTS Payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid DECIMAL(10, 2) NOT NULL,
      paymentStatus VARCHAR(255) NOT NULL
    )
  `;

  connection.execute(usersTable, (err) => {
    if (err) {
      console.log("Error creating Users table:", err);
    } else {
      console.log("Users table created successfully");
    }
  });

  connection.execute(busesTable, (err) => {
    if (err) {
      console.log("Error creating Buses table:", err);
    } else {
      console.log("Buses table created successfully");
    }
  });

  connection.execute(bookingsTable, (err) => {
    if (err) {
      console.log("Error creating Bookings table:", err);
    } else {
      console.log("Bookings table created successfully");
    }
  });

  connection.execute(paymentsTable, (err) => {
    if (err) {
      console.log("Error creating Payments table:", err);
    } else {
      console.log("Payments table created successfully");
    }
  });

})
// Function to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});