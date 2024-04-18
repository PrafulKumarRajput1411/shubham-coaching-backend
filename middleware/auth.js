const jwt = require('jsonwebtoken');
const basicAuthentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Basic ')) {
        const base64Credentails = authHeader.split(' ')[1];
        const credentails = Buffer.from(base64Credentails, 'base64').toString('utf-8');
        const [username, userpassword] = credentails.split(':');
        if (username === process.env.BASIC_AUTH_USER && userpassword === process.env.BASIC_AUTH_PASSWORD) {
            return next();
        } else {
            return res.status(401).json({ status: false, message: "Unauthorized" });
        }
    }
}
const loginAuthentication = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ status: false, message: "Unauthorized Access" })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        console.log(err, decoded)
        if (err) {
            if (err.name == 'TokenExpiredError') {
                return res.status(401).json({ status: false, message: 'Token Expired', err: err })
            } else {
                return res.status(401).json({ status: false, message: "Invalid Token" })
            }
        }
        req.user = decoded;
        next()
    })
}
module.exports = {
    basicAuthentication,
    loginAuthentication
}
// module.exports = (req, res, next) => {
//     try {
//         let token = req.header('token')
//         if (token) {
//             jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {

//                 if (err) {
//                     if (err['name'] == 'TokenExpiredError') {
//                         res.status(403).json({ status: false, message: "Session Timeout!", error: err })
//                         return;
//                     } else {
//                         res.status(401).json({ status: false, message: "Unauthorized" })
//                         return;
//                     }
//                 }
//                 req.user = decoded;
//                 next();
//             })
//         } else {
//             next();
//         }
//     } catch (error) {
//         res.status(500).json({ status: false, message: "Internal Server Error" })
//     }
// }