const nodemailer = require('nodemailer')


const myEmailAdress = 'aimbrasoftwares@gmail.com'

let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: myEmailAdress,
        pass: 'aimbras2018.12'
    }
)

let mailOptions = {
    from: userMail,
    to: myEmailAdress,
    subject: userSubject,
    text: `
        Name: ${userName}<br> 
        Message: ${userText}
    `
}

transporter.sendMail(mailOptions, (error, info) => {

})

let mail = new Mail('Thiago', 'grupocodenome@gmail.com', 'Orçamento', 'Gostaria de conversar com vocês sobre orçamento')
console.log(mail)

