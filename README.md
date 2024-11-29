# RBAC Authentication and Dashboard System

## Overview  
This project demonstrates a **Role-Based Access Control (RBAC)** system with authentication and authorization. Users can register, log in, and access dashboards based on their roles (**Admin, Moderator, or User**). The project implements secure authentication, private routing, role-specific features, and token expiry handling, providing a seamless and secure experience.

---

## Features  

### 1. Authentication System  
**Signup:**  
- Registers a new user with a hashed password.  
- Validates unique email and strong password rules.  

**Login:**  
- Authenticates users with email and password.  
- Generates a JWT token and stores it securely in `localStorage`.  

**Logout:**  
- Clears token and user data from `localStorage`.  

---

### 2. Role-Based Access Control (RBAC)  
**Dynamic Role-Based Routes:**  
- Redirects users to their role-specific dashboards (`/dashboard/{userRole}`).  
- Prevents unauthorized access to other dashboards.  

**Private Routes:**  
- Ensures only logged-in users can access restricted pages.  
- Role validation enforced on route access.  

**API Access Control:**  
- Fetches user data (`getUserDataById`) based on role validation.  
- Ensures actions and resources are role-specific.  

---

### 3. Security Features  
**JWT Token:**  
- Used for stateless authentication.  
- Includes an expiry time to ensure the token is valid only for a limited period.  
- On expiry, the system prompts the user to log in again, removing the expired token from `localStorage`.  

**Password Hashing:**  
- Passwords are hashed using `bcrypt` for secure storage.  

**Token Validation:**  
- Ensures expired or invalid tokens are removed from `localStorage`.  

---

### 4. Additional Enhancements  
**State Management:**  
- Redux is used to manage authentication, user roles, and API states.  

**Loading Indicators:**  
- Enhances UX during API calls.  

**Improved UI:**  
- Modernized design with 3D animations.  

**Content Credit:**  
- The content is adapted from an existing VRV website, with UI and functionality upgraded.  

---

## Technologies Used  

**Frontend:**  
- React (with Redux for state management).  
- React Router for navigation and private routes.  
- Tailwind, Modern CSS and animations for styling.  

**Backend:**  
- Node.js with Express for RESTful APIs.  
- MongoDB (or your preferred database) for storing user data.  
- bcrypt for password hashing.  
- jsonwebtoken (JWT) for authentication.  

**Other Tools:**  
- Postman/Thunder Client for API testing.  

---

## Installation and Setup  

**Clone the Repository:**  
```bash
git clone https://github.com/champalalsuthar/VRV
```
**Install Dependencies:**
- For Backend:
```bash
cd backend
npm install]
```
- For Frontend:
```bash
cd frontend
npm install]
```

**Run the Project:**
- Start Backend:
```bash
cd backend
npm node app.js
```
- Start Frontend:
```bash
cd frontend
npm start
```


### Access the Application:
Open your browser and navigate to ```http://localhost:3000.```



## Folder Structure
### Backend
```bash
/backend
|-- controllers/      # API logic
|-- middlewares/      # Authentication and Role validation middleware
|-- models/           # Mongoose schemas for Users, Roles, etc.
|-- routes/           # API routes
|-- app.js            # Main server file
```
### Frontend
```bash
/frontend
|-- src/
    |-- components/   # UI components
    |-- pages/        # Pages (Home, About, Services, etc.)
    |-- redux/        # Redux slices for state management
    |-- utils/        # Helper functions
    |-- App.js        # Main React app file
```

## Future Enhancements
- Implement refresh tokens for improved session management.
- Add audit logs for admin actions.
- Include Two-Factor Authentication (2FA).
## Acknowledgments
- Content Credit: Original content and ideas adapted from the VRV website.
- UI Enhancements: Redesigned with modern aesthetics and animations.

