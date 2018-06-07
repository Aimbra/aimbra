module.exports = (app) => {
    app.get(
        '/contact',
        (req, res, next) => {
            res.render('contact/contact')
        }
    )

    app.post(
        '/contact',
        (req, res, next) => {
            const dataForm = {
                name: req.body.name,
                email: req.body.email,
                subject: req.body.subject,
                message: req.body.message
            }
            console.log(dataForm)
        }
    )
}