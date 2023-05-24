import CartMongooseDao from "../dao/cartMoongoseDao.js";

class CartManager {

    constructor() {
        this.cartDao = new CartMongooseDao
    }

    async getAll() {
        return this.cartDao.getCarts()
    }

    async createCart() {
        return this.cartDao.createCart()
    }

    async getCart(cartId) {
        return this.cartDao.getCart(cartId)
    }

    async addProdCart(data) {
        return this.cartDao.addProdCart(data)
    }

    async removeProdCart(data) {
        return this.cartDao.removeProdCart(data)
    }
}

export default CartManager