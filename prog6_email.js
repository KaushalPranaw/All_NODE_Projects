var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    {
         service: 'gmail',
        //host: 'smtp.gmail.com',
     //   port: 465,
       // secure: true, // use SSL
        auth: {
            user: 'abc@gmail.com',
            pass: 'abc'
        }
    }
);

var mailOptions = {
    from: 'abc@gmail.com',
    to: 'abc@gmail.com',
    subject: 'Sending mail using nodejs',
    text: 'hello from pranaw'
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log(err)
    else {
        console.log('EMail Sent : ' + info.response);
    }
});