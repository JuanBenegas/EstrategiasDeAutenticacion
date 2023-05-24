import cartSchema from "./models/cartSchema.js";

class CartMongooseDao {

    async getCarts() {
        const cartDocument = await cartSchema.find()
        return cartDocument.map(e => ({
            id: e._id,
            products: e.products
        }))
    }

    async createCart() {
        const cartDocument = await cartSchema.create({})
        return {
            id: cartDocument._id,
            products: []
        }
    }

    async getCart(cartId) {
        const cartDocument = await cartSchema.findOne({ _id: cartId.id })
        if (!cartDocument) {
            throw new Error('Cart dont exist')
        } else {
            return {
                id: cartDocument._id,
                products: []
            }
        }
    }

    // async addProdCart(data) {
    //     const cartDocument = await cartSchema.findOne({ _id: data.id })
    //     if (!cartDocument) {
    //         throw new Error('Error ID Cart')
    //     } else {
    //         let prodInCart = cartDocument.products = { IdProduct: data.pid, quantity: 1 }
    //         return {
    //             id: cartDocument._id,
    //             products: cartDocument.products
    //         }
    //     }
    // }

    async addProdCart(data) {
        const cartDocument = await cartSchema.findOne({ _id: data.id })
        if (!cartDocument) {
            throw new Error('Error ID Cart')
        } else {
            let products = cartDocument.products
            let productIndex = products.findIndex(p => p.IdProduct === data.pid)
            if (productIndex !== -1) {
                products[productIndex].quantity++
            } else {
                // El producto no está en el carrito, agregarlo
                products.push({ IdProduct: data.pid, quantity: 1 })
            }
            const updatedCart = await cartSchema.findOneAndUpdate(
                { _id: data.id },
                { products: cartDocument.products },
            )
            return {
                id: updatedCart._id,
                products: updatedCart.products
            }
        }
    }

    async removeProdCart(data) {
        const cartDocument = await cartSchema.findOne({ _id: data.id })
        if (!cartDocument) {
            throw new Error('Error ID Cart')
        } else {
            let products = cartDocument.products
            let productIndex = products.findIndex(p => p.IdProduct === data.pid)
            if (productIndex !== -1) {
                if (products[productIndex].quantity > 1) {
                    products[productIndex].quantity--
                } else {
                    products.splice(productIndex, 1)
                }
            }
            const updatedCart = await cartSchema.findOneAndUpdate(
                { _id: data.id },
                { products: cartDocument.products },
                { new: true }
            )
            return {
                id: updatedCart._id,
                products: updatedCart.products
            }
        }
    }

}

export default CartMongooseDao