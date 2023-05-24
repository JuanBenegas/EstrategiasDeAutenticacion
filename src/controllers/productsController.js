import ProductManager from "../mangers/productManager.js"

export const list = async (req, res) => {
    const { name, limit, page } = req.query
    const manager = new ProductManager()

    const orders = await manager.paginate({ name, limit, page })
    res.send({ status: "Success", orders: orders.docs, ...orders, docs: undefined })
}

export const getAll = async (req, res) => {
    try {
        const manager = new ProductManager()

        const products = await manager.find()
        res.send({ status: "Success", products })
    }
    catch (e) {
        throw new Error("I can't find products.", e)
    }
}

export const findOne = async (req, res) => {
    let { id } = req.params
    const manager = new ProductManager()
    const product = await manager.getOne(id)
    res.send({ status: "Success", product })
}

export const createOne = async (req, res) => {
    let body = req.body
    const manager = new ProductManager()
    const products = await manager.create(body)
    res.send(products)
}

export const updateOne = async (req, res) => {
    const manager = new ProductManager()
    let id = req.params
    let prodToReplace = req.body
    let newProd = await manager.updateOne(id, prodToReplace)
    res.send(newProd)
}

export const deleteOne = async (req, res) => {
    const manager = new ProductManager()
    let { id } = req.params
    let prodDelete = await manager.deleteOne({ _id: id })
    if (!prodDelete.deletedCount) return res.send({ status: "Error, this product doesn't exist" })
    res.send({ status: "Success - Product Delete" })
}