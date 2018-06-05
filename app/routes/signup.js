module.exports = (app) =>
    app.get(
        '/signup',
        (req, resp) => resp.render('security/signup')
    )