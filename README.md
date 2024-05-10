**Online Shoes Website with Backend**

## Introduction
This project is an Online Shoes Website with a fully functional backend. It allows users to browse through a collection of shoes, add them to their cart, and make purchases securely. The backend is built using Node.js and Express.js, while MongoDB is used as the database to store shoe and user information. Nodemailer is implemented for sending email notifications, and Razerpay is integrated for handling payment transactions.

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- Nodemailer
- Razerpay

## Features
1. **User Authentication**: Users can create accounts, log in, and log out securely.
2. **Product Listings**: Display a variety of shoes with details such as name, price, description, and images.
3. **Shopping Cart**: Users can add shoes to their cart and proceed to checkout.
4. **Checkout Process**: Integration with Razerpay for secure payment processing.
5. **Order Tracking**: Users can view their order history and track the status of their orders.
6. **Email Notifications**: Nodemailer is used to send email notifications for order confirmations, shipping updates, etc.
7. **Admin Panel**: Admins can add, edit, and delete products, manage orders, and view user information.
8. **Responsive Design**: The website is designed to be responsive and accessible on various devices.

## Setup Instructions
1. Clone the repository to your local machine.
```
git clone <repository-url>
```
2. Install dependencies using npm.
```
npm install
```
3. Set up your MongoDB database and configure the connection string in `config.js`.
4. Set up your email service provider credentials in `config.js` for Nodemailer.
5. Configure Razerpay credentials in `config.js`.
6. Run the server.
```
node server.js
```
7. Access the website in your browser at `http://localhost:3000`.

## Folder Structure
- **/public**: Contains static assets such as images, CSS, and client-side JavaScript files.
- **/views**: Contains HTML templates for rendering pages.
- **/routes**: Contains route handlers for different endpoints.
- **/models**: Contains Mongoose models for interacting with the database.
- **/controllers**: Contains controllers for handling business logic.
- **/config**: Contains configuration files including database connection, email service, and payment gateway setup.
- **/middlewares**: Contains custom middleware functions.
- **/utils**: Contains utility functions used throughout the application.

## Contributors
- Akshay Kumar Hiran
- Akshat Sharma
- Neha Gupta

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- Special thanks to [Name] for their contributions.
- Inspired by [Source or Inspiration].
- Built with [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).
