module.exports = (app) =>
    app.get(
        '/contact',
        (req, resp) => resp.render('contact/contact')
    )