import { Router } from "express";
// import prodsSchema from '../dao/models/prods.model.js'
// import ProductManager from "../dao/productManager.js";
import { createOne, deleteOne, findOne, getAll, list, updateOne } from "../controllers/productsController.js";
import { createCart, getCart, getCarts, addProdCart, removeProdCart } from "../controllers/cartController.js";

const prodsRouter = Router()

prodsRouter.get('/', getAll)
prodsRouter.get('/list', list)
prodsRouter.get('/products', getAll)
prodsRouter.get('/products/:id', findOne)
prodsRouter.post('/products/', createOne)
prodsRouter.put('/products/:id', updateOne)
prodsRouter.delete('/products/:id', deleteOne)
prodsRouter.get('/cart', getCarts)
prodsRouter.post('/cart', createCart)
prodsRouter.get('/cart/:id', getCart)
prodsRouter.post('/cart/:id/product/:pid', addProdCart)
prodsRouter.delete('/cart/:id/product/:pid', removeProdCart)

export default prodsRouter


