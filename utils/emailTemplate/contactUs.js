let contactUsTempalte = (phone, name, email, message) => {
    return `<!DOCTYPE html>
      

            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>

                    <body>
                    <div>
                            Name: <a style="color: blue;"  >${name}</a>
                        </div>
                        <div>
                            Phone: <a style="color: blue;" href="tel:${phone}">${phone}</a>
                        </div>
                        <div style="margin-top: 4px;">
                            Email: <a style="color: blue;" href="mailto:${email}">${email}</a>
                        </div>
                        <h5 style="margin-bottom: 0px !important;">Description:</h5>
                        <p style="margin-top: 4px;">${message}</p>
                    </body>

                `
}

module.exports = { contactUsTempalte }