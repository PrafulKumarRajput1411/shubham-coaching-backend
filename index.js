const express = require('express')


const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();
const PORT = 8001;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Use the mainRoutes in your application
const router = require('./routes/main-routes')
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is live now: http://localhost:${PORT}`);
});