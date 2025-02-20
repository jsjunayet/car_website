

# Car Shop Application Backend

## 🚀 Live URL
[Live Backend URL](https://blogging-website-snowy-chi.vercel.app/)

---

## 📜 Project Overview

Car Shop is a full-stack web application designed to provide a seamless car shopping experience. The platform includes user-friendly features, secure authentication, and smooth product management

---

## 🧰 Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for building APIs
- **MongoDB & Mongoose**: NoSQL database and its ORM for managing data
- **JWT (JSON Web Tokens)**: Secure authentication method
- **bcrypt**: Password hashing for secure storage
- **dotenv**: To load environment variables
- **TypeScript**: Static typing for JavaScript code

---


## 📦 **Getting Started**  

Follow these steps to set up the project locally:

### **Prerequisites**  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  

### **Installation**  

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd blogging_site
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up the environment variables:  
   Create a `.env` file in the project root with the following content:  
   ```env
   PORT=5000
   MONGO_URI=<your-mongo-connection-string>
   ```

4. Build the project (TypeScript to JavaScript):  
   ```bash
   npm run build
   ```

5. Start the server in production mode:  
   ```bash
   npm run start:prod
   ```

6. For development with hot-reloading:  
   ```bash
   npm run start:dev
   ```

---

## 🛠️ **Available Scripts**  

### **Development**  
- `npm run start:dev`: Starts the server in development mode with hot-reloading.  

### **Production**  
- `npm run start:prod`: Runs the server in production mode after building.  

### **Build**  
- `npm run build`: Compiles TypeScript files to JavaScript.  

### **Linting**  
- `npm run lint`: Lint all TypeScript files using ESLint.  
- `npm run lint:fix`: Automatically fix linting errors.  

### **Formatting**  
- `npm run prettier`: Formats all code using Prettier.  
- `npm run prettier:fix`: Fixes code formatting issues.  
  

