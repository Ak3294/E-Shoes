
// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors'); // Import cors module

// // Initialize Express app
// const app = express();
// const PORT = 3000; // You can change the port number if needed

// // Middleware to parse JSON requests
// //-------------------------------------------
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });
//----

function submitForm(e)
{
    // setTimeout(() => {
    //     // Create OTP input field
    //     const otpInput = document.createElement("input");
    //     otpInput.setAttribute("type", "text");
    //     otpInput.setAttribute("placeholder", "Enter OTP");
    //     otpInput.setAttribute("id", "otp");
    //     document.querySelector(".sign-in-form").appendChild(otpInput);
    // }, 60000); // 1 minute delay (in milliseconds)

    console.log("submit form function called");
    //e.preventDefault();
    let user_name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const formData = {
        username: user_name,
        email: email,
        password: password
    };

    fetch('http://localhost:3000/SignUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // You can handle the response here, such as showing a success message to the user
        console.log("data posted");
        
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'otpfield');
        input.setAttribute('id', 'otp');
        input.setAttribute('placeholder','otp');

        // Add class
        const pass_ele = document.getElementById('password');
        const submit_ele = document.getElementById('submit_btn');
        submit_ele.textContent = "SUBMIT";
        let container = document.getElementsByClassName('sign-in-form')[0];
        container.insertBefore(input, pass_ele.nextSibling);
        input.addEventListener('keydown' , function(event){
            if(event.key === 'Enter'){
                userOTP = document.getElementById('otp').textContent;
                sendOtp(userOTP);
            }
        })
        
    })
}
let USED_OTP = new Set();

function generateOTP() {
   return Math.floor(10000 + Math.random() * 90000); // Generates a random number between 10000 and 99999
}
function verifyOTP(userOTP , generatedOTP) {
     if(userOTP == generateOTP) return true;
     return false;
}
function markOTPAsUsed(OTP) 
{
     USED_OTP.add(OTP);
}
function sendOtp(userOTP)
{
    OTP = generateOTP();

    while(USED_OTP.has(OTP))
    OTP = generateOTP();



    if(!verifyOTP(userOTP,OTP)){
       console.log("wrong otp");
       window.location = "signUp.html"; 
    }

    markOTPAsUsed(OTP);
    alert("otp verification done");
    window.location = "index.html";


}
