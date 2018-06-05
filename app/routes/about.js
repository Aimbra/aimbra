module.exports = (app) =>
    app.get(
        '/about',
        (req, resp) => resp.render('about/about')
    )