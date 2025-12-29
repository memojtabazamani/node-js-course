// 1. Read CSV files
const { readCSV } = require('./src/utils/fileHandler')
const readFiles = async () => {
  const json = await readCSV('./input/catalogA.csv')
  console.log('json', json)
}
readFiles()
// 2. Process Files and Merfe Products

// 3. Generate Output file
