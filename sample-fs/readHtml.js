const fs = require('fs');
const readHtml = (path) => {
    return fs.readFileSync(path)
}
module.exports = readHtml;