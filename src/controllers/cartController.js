import CartManager from "../mangers/cartManager.js";

export const getCarts = async (req, res) => {
    const manager = new CartManager()

    const cart = await manager.getAll()
    res.send({ status: "Succes", cart })
}

export const createCart = async (req, res) => {
    const manager = new CartManager()

    const cart = await manager.createCart()
    res.send({ status: "Succes", cart })
}

export const getCart = async (req, res) => {
    const manager = new CartManager()
    let cartId = req.params
    const cart = await manager.getCart(cartId)
    res.send({ status: "Succes", cart })
}

export const addProdCart = async (req, res) => {
    const manager = new CartManager()
    let data = req.params
    const cart = await manager.addProdCart(data)
    res.send({ status: "Succes", cart })
}

export const removeProdCart = async (req, res) => {
    const manager = new CartManager()
    let data = req.params
    const cart = await manager.removeProdCart(data)
    res.send({ status: "Succes", cart })
}


