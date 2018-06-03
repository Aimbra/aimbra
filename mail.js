let nodemailer = require('nodemailer')
let transporte = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth: {
            user: 'grupocodenome@gmail.como',
            pass: 'assim'
        }
    }
)

let email = {
    from: ''
}