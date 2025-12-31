const homeController = (req, res) => {
    res.render('index', {
        title: 'Hey Mojtaba',
        message: 'Hello there!!',
        imgSrc: 'assets/img/img.webp',
    })
}

module.exports = homeController
