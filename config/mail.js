const nodemailer = require('nodemailer')

function Mail(userName, userMail, userSubject, userText) {

    this.userName = userName
    this.userMail = userMail
    this.userSubject = userSubject
    this.userText = userText

    const myEmailAdress = 'aimbrasoftwares@gmail.com'
    
    this.transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: myEmailAdress,
            pass: 'aimbras2018.12'
        }
    )
    
    mailOptions = {
        from: userMail,
        to: myEmailAdress,
        subject: userSubject,
        text: `
            Name: ${userName}<br> 
            Message: ${userText}
        `
    }
    
    this.transporter.sendMail(mailOptions, (error, info) => {
    
    })

}

const mail = new Mail (
    'Thiago',
    'grupocodenome@gmail.com',
    'Orçamento',
    'Gostaria de solicitar um orçamento pf'
)




console.log(mail)

