const homeController = (req, res) => {
    res.send(
        `
        <div>
        <h1> Image </h1>
        <img src='/assets/img/img.webp' width='10%' />
        </div>`
    )
}

module.exports = homeController
