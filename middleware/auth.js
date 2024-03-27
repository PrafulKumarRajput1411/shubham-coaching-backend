const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        let token = req.header('token')
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if (err) {
                    if (err['name'] == 'TokenExpiredError') {
                        res.status(403).json({ status: false, message: "Session Timeout!", error: err })
                        return;
                    } else {
                        res.status(401).json({ status: false, message: "Unauthorized" })
                        return;
                    }
                }
                req.user = decoded;
                next();
            })
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" })
    }
}