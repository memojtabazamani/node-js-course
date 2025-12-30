// 1. Read CSV files
const {
    readCSV,
    readDirectory,
    readSourcesNames,
    generateCSV,
} = require('./src/utils/fileHandler')

const { asyncForEach } = require('./src/utils/asyncForEach')
const CatalogModel = require('./src/models/CatalogModel')
const readFileStep = async () => {
    const fileNames = await readDirectory('./input')
    const sources = readSourcesNames(fileNames)
    let data = []
    await asyncForEach(sources, async (source) => {
        data[source] = []
        data[source].catalog = await readCSV(`./input/catalog${source}.csv`)
        data[source].suppliers = await readCSV(`./input/suppliers${source}.csv`)
        data[source].barcodes = await readCSV(`./input/barcodes${source}.csv`)
    })

    return data
}

const processMergeStep = async (data) => {
    const catalogObj = new CatalogModel()
    await asyncForEach(Object.keys(data), async (catalogSourceName) => {
        await catalogObj.addProducts(data[catalogSourceName])
    })
    return catalogObj
}
const runApp = async () => {
    // 1. Read CSV Files
    const data = await readFileStep()
    // 2. Process Files and Merge Products
    const mergedResult = await processMergeStep(data)
    // 3. Generate Output file
    generateCSV(mergedResult.products)
}
runApp()
