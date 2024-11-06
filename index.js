import express from  'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import route from './routes/UserRoute.js'

 
const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Environment variables
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB and start the server
mongoose.connect(MONGOURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => console.log('Error connecting to MongoDB:', error));

    
// Routes
app.use('/api', route);

