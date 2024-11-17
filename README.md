# Vehicle Booking Service App Documentation  

This guide provides step-by-step instructions for setting up and running a multi-platform vehicle booking service application. The app includes a front-end built with React and Expo for web, Android, and iOS, and a back-end using Node.js and MongoDB.

---

## Prerequisites  

### General Requirements  
- Node.js (v16 or higher)  
- npm (Node Package Manager) or Yarn  
- MongoDB installed locally or access to a MongoDB Atlas cluster  
- Expo CLI (`npm install -g expo-cli`)  
- A modern code editor (e.g., Visual Studio Code)  

### For Running the Mobile App  
- Expo Go app (for testing on mobile devices)  
- Android Studio and/or Xcode for emulators (optional)  

---

## Steps to Set Up the Project  

### 1. Clone the Repository  
Clone the project repository to your local machine:  
```bash  
git clone <repository-url>  
cd vehicle-booking-app  
```  

### 2. Set Up the Client  

1. Navigate to the `client` directory:  
   ```bash  
   cd client  
   ```  

2. Install the required dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the Expo server for development:  
   ```bash  
   npm start  
   ```  

4. Scan the QR code using the Expo Go app to run the app on your mobile device or choose to open the app on a web browser, Android emulator, or iOS simulator.  

---

### 3. Set Up the Server  

1. Navigate to the `server` directory:  
   ```bash  
   cd ../server  
   ```  

2. Install the server dependencies:  
   ```bash  
   npm install  
   ```  

3. Configure the database:  
   - Open the `config/db.js` file.  
   - Update the MongoDB connection string if required (e.g., use a MongoDB Atlas connection string or local MongoDB URL).  

4. Start the server:  
   ```bash  
   npm start  
   ```  

   The server will start on `http://localhost:5000`.  

---

## Directory Structure Overview  

The project has the following main directories:  

- **`client/`**: Contains the React/Expo front-end code.  
- **`server/`**: Contains the Node.js back-end code.  
- **`config/`**: Server configuration files, including the database connection setup.  
- **`routes/`**: Defines API endpoints.  
- **`controllers/`**: Includes server-side business logic for handling API requests.  
- **`models/`**: MongoDB schemas for data storage.  

---

## Testing the Application  

1. Open the client-side application using Expo Go, a web browser, or an emulator.  
2. Navigate to the booking page and enter the destination.  
3. Book a cab to view the path and travel details.  
4. Use tools like Postman to test server endpoints (`http://localhost:5000/api`).  

---

## Deployment  

### Front-End (Expo)  

1. Build the application for production:  
   ```bash  
   expo build  
   ```  

2. Follow Expo instructions to generate APK (Android) or IPA (iOS) files for publishing.  

### Back-End  

1. Host the server on a cloud service like AWS, Heroku, or Vercel.  
2. Ensure the MongoDB database is accessible remotely (e.g., MongoDB Atlas).  

---

## Future Enhancements  

1. Add user authentication for a secure booking experience.  
2. Implement real-time cab tracking using WebSocket or Firebase.  
3. Add payment gateway integration.  
4. Include a rating and feedback feature for rides.  

---

## Troubleshooting  

### Common Issues  

1. **MongoDB Connection Fails**:  
   - Ensure MongoDB is running locally or the Atlas URI is correctly configured.  

2. **Expo App Does Not Load**:  
   - Restart the Expo server and ensure the QR code is scanned with the correct network connection.  

3. **CORS Errors**:  
   - Add appropriate CORS middleware to the server.  

---

## License  

This project is licensed under the MIT License.  

---  

For further assistance, contact Ranit Saha a.k.a [Coderooz](https://github.com/coderooz).