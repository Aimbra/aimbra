module.exports = (app) =>
    app.get(
        '/signin',
        (req, resp) => resp.render('security/signin')
    )