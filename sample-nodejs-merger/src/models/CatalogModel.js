const { asyncForEach } = require('../utils/asyncForEach')
const catalogObj = require('./CatalogModel')

class CatalogModel {
    constructor() {
        this.products = []
    }
    async addProduct(product) {
        console.log(`Adding product for product ${product}`)
    }
    async addProducts(catalogData) {
        await asyncForEach(catalogData.catalog.data, async (catalogRow) => {
            const productData = {}
            productData.SKU = catalogRow.SKU
            productData.Description = catalogRow.Description
            productData.Barcodes = []
            await asyncForEach(
                catalogData.barcodes.data,
                async (barcodeRow) => {
                    if (barcodeRow.SKU === catalogRow.SKU) {
                        productData.Barcodes.push(barcodeRow.Barcode)
                    }
                    productData.SupplierID = barcodeRow.SupplierID
                }
            )
            productData.SupplierName = catalogData.suppliers.data.find(
                (supplierRow) => {
                    return (supplierRow.ID = productData.SupplierID)
                }
            ).Name
            this.addProduct(productData)
        })
    }
}
module.exports = CatalogModel
