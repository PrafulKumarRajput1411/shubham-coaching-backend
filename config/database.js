// module.exports = {
//     HOST: 'sql6.freesqldatabase.com',
//     USER: 'sql6689422',
//     PASSWORD: 'edWEsNVh3i',
//     DB: 'sql6689422',
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     }
// }
// module.exports = {
//     HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: '1234567890',
//     DB: 'practice',
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     }
// }
const moongoose = require('mongoose')
const DB = "mongodb+srv://prafulkumarrajput14:S3pp886su1aITm2G@cluster0.jjkijqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
moongoose.connect(DB).then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err)
})