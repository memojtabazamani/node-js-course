const Papa = require('papaparse')
const fs = require('fs')
const generateCSV = async (data) => {
    const csv = Papa.unparse({
        fields: ['SKU', 'Description'],
        data: data.map((product) => {
            return {
                SKU: product.SKU,
                Description: product.Description,
            }
        }),
    })
    await fs.writeFileSync('./output/result.csv', csv)
}
const readSourcesNames = (filesNames) => {
    const catalogNames = filesNames.filter((fileName) => {
        return fileName.startsWith('catalog')
    })
    const sources = catalogNames.map((catalogName) => {
        return catalogName.replace(/catalog|.csv/g, '')
    })
    return sources
}
const readDirectory = async (folderPath) => {
    return await fs.readdirSync(folderPath)
}
const readCSV = (filePath) => {
    return new Promise((resolve) => {
        const csvFile = fs.readFileSync(filePath).toString()
        Papa.parse(csvFile, {
            header: true,
            complete: function (results) {
                resolve(results)
            },
        })
    })
}

module.exports = {
    readCSV,
    readDirectory,
    readSourcesNames,
    generateCSV,
}
