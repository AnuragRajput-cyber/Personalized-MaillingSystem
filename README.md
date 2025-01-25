# Personalized Mailing System

**A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for personalized email management and communication.**

## Features
- **User Authentication**: Secure user registration and login with JWT-based authentication.
- **Personalized Emails**: Create, customize, and send personalized email templates.
- **Email Scheduling**: Schedule emails to be sent at a specific time.
- **API Integration**: Seamlessly integrates with third-party email services like SendGrid or Nodemailer.
- **Database Storage**: Store and manage user details and email history using MongoDB.

---

## Tech Stack

### Frontend:
- **React.js**: Dynamic and responsive user interface.
- **Redux**: State management for scalable UI.
- **CSS/Bootstrap/Tailwind**: For styling.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for creating REST APIs.

### Database:
- **MongoDB**: NoSQL database for storing user and email data.

### Additional Tools:
- **Nodemailer/SendGrid**: Email delivery and management.
- **JWT (JSON Web Tokens)**: Secure authentication.
- **Mongoose**: MongoDB object modeling.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnuragRajput-cyber/Personalized-MaillingSystem.git
   cd Personalized-MaillingSystem
   ```

2. Install dependencies for both the client and server:
   ```bash
   # Navigate to backend directory
   cd backend
   npm install

   # Navigate to frontend directory
   cd ../frontend
   npm install
   ```

3. Configure environment variables:
   - In the `backend` folder, create a `.env` file and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     EMAIL_SERVICE=your_email_service
     EMAIL_USER=your_email_user
     EMAIL_PASS=your_email_password
     ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd ../frontend
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Usage
- **Signup/Login**: Create an account or log in to access features.
- **Email Management**: Create and save personalized email templates.
- **Email Scheduling**: Schedule emails to be sent automatically.
- **View History**: Track sent emails and their statuses.

---

## Project Structure
```
Personalized-MaillingSystem/
|
|-- backend/       # Backend code (Node.js, Express.js, MongoDB)
|-- frontend/      # Frontend code (React.js)
|-- .gitignore     # Git ignore file
|-- README.md      # Project documentation
```

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code adheres to the project's coding standards.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For questions or feedback, feel free to reach out:
- **Author**: Anurag Rajput
- **Email**: [anuragrajput1226@gmail.com]
- **GitHub**: [AnuragRajput-cyber](https://github.com/AnuragRajput-cyber)

