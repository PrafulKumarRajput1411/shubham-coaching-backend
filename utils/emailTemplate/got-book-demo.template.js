const gotDemoTemplate = (data) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Black+Ops+One&family=Permanent+Marker&display=swap">
    <title>Demo Session Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        p {
            margin-bottom: 20px;
            line-height: 1.5;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        .subContainer{
            display:flex;
            justify-content: center;
    align-items: center;
        }
    </style>
</head>
<body>
    <div class="container">
    <div class="subContainer"  >
    <img src='https://raw.githubusercontent.com/PrafulKumarRajput1411/subham-coaching/main/src/assets/images/img/logo2.png' style="height:50px;margin-top:14px"/>
    <span style="
   font-family: 'Black Ops One', system-ui;
    font-size: 45px;
    font-weight: 800;
    color: #06BBCC;
    margin-right:10px
">Radiant Tutorials
    </span>
    </div>

        <h1>Demo Session Booking Confirmation</h1>

        <p>Name: ${data.student_name}</p>
        <p>Email: <a style="color: blue;" href="mailto:${data.student_email}">${data.student_email}</a></p>
        <p>Phone: <a style="color: blue;" href="tel:${data.student_phone}">${data.student_phone}</a></p>
        <p>Date: <strong>${monthNames[new Date(data.demo_date).getMonth()]} ${new Date(data.demo_date).getDate()}, ${new Date(data.demo_date).getFullYear()}</strong></p>
        <p>Class: ${data.student_class}</p>
        <p>Board: ${data.student_board ? data.student_board : ""}</p>
        <p>Type: ${data.subject_type ? data.subject_type : ""}</p>
        <p>Time: <strong>${data.demo_time_slot}</strong></p>
        <p>Location: <strong>Online (Zoom)</strong></p>
        <p>Query: ${data.demo_query}</p>
    </div>
</body>
</html>

</body>

</html>
    `
}
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
module.exports = gotDemoTemplate