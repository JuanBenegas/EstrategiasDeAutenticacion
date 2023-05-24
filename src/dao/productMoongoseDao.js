import prodSchema from "./models/prodSchema.js";

class ProdMongooseDao {

    async paginate(criteria) {
        const { name, limit, page } = criteria
        const orderDocuments = await prodSchema.paginate({ name }, { limit, page })

        orderDocuments.docs = orderDocuments.docs.map(document => ({
            id: document._id,
            name: document.name,
            brand: document.brand,
            description: document.description,
            price: document.price,
            stock: document.stock,
            image: document.image,
            enable: document.enable
        }))
        return orderDocuments
    }


    async find() {
        const productsDocument = await prodSchema.find()

        return productsDocument.map(e => ({
            id: e._id,
            name: e.name,
            brand: e.brand,
            description: e.description,
            price: e.price,
            stock: e.stock,
            image: e.image
        }))
    }

    async getOne(id) {
        const productsDocument = await prodSchema.findOne({ _id: id })

        if (!productsDocument) {
            throw new Error('Product dont exist.');
        }

        return {
            id: productsDocument._id,
            name: productsDocument.name,
            brand: productsDocument.brand,
            description: productsDocument.description,
            price: productsDocument.price,
            stock: productsDocument.stock,
            image: productsDocument.image
        }
    }

    async create(prod) {
        const productsDocument = await prodSchema.create(prod)

        return {
            id: productsDocument._id,
            name: productsDocument.name,
            brand: productsDocument.brand,
            description: productsDocument.description,
            price: productsDocument.price,
            stock: productsDocument.stock,
            image: productsDocument.image
        }
    }

    async updateOne(id, data) {
        const productsDocument = await prodSchema.findOneAndUpdate({ _id: id.id }, data, { new: true })

        if (!productsDocument) {
            throw new Error('Product dont exist.');
        }

        return {
            id: productsDocument._id,
            name: productsDocument.name,
            brand: productsDocument.brand,
            description: productsDocument.description,
            price: productsDocument.price,
            stock: productsDocument.stock,
            image: productsDocument.image
        }
    }

    async deleteOne(id) {
        return prodSchema.deleteOne({ _id: id })
    }
}

export default ProdMongooseDao