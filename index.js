const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('./config/database')
const app = express();
app.use(cookieParser());
const PORT = 8001;
require('dotenv').config();
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const corsOption = {
    origin: ['http://localhost:4200', 'https://subham-coaching.vercel.app'],
    credentials: true
}
app.use(cors(corsOption));

// Use the mainRoutes in your application
const router = require('./routes/main-routes')
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is live now: http://localhost:${PORT}`);
});
