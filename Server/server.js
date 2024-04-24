// server.js
let counter = 1210;
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import cors module

// Initialize Express app
const app = express();
const PORT = 3000; // You can change the port number if needed

// Middleware to parse JSON requests
//-------------------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
//--------------------------------------------------

// Nodemailer 
//-------------------------------------------
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'akshaykumarhiran2@gmail.com', // Replace with your email
      pass: 'eqbo tvub fywd kmbe'         // Replace with your password
    }
  });
  
  // Route to handle POST requests from the frontend
  app.post('/createOrder', (req, res) => {
    // Extract form data from the request body
     res.send("create order api");
     
  });
//-------------------------------------------






// app.post('/SubmitOtp' , (req,res) => {
     
// })

// Route to handle POST requests from the frontend
app.post('/SignUp', (req, res) => {

    let offset = Math.floor(Math.random() * 10) + 1;
    let otp = counter + offset;
    let otpstr = otp.toString();
    console.log(otpstr);
  
  console.log(req.body);


  USER_NAME = req.body.username;
  USER_EMAIL = req.body.email;
  USER_PASSWORD = req.body.password;



  const mailOptions = {
    from: 'akshaykumarhiran2@gmail.com', // Sender address
    to: USER_EMAIL, // Recipient address
    subject: 'testing', // Subject line
    text: otpstr // Plain text body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Form data sent via email successfully!' });
    }
  });

  // Send a response back to the frontend
  res.status(200).json({ message: 'Shoe data received successfully!' });
});

app.get('/' , (req,res) => {
    res.send("get request at home route");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});