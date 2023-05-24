import mongoose, { Schema, mongo } from "mongoose";

const cartCollection = 'carts'

const cartSchema = new Schema({
    id: { type: Schema.Types.String, require: true },
    products: { type: Schema.Types.Array, require: true },
})

export default mongoose.model(cartCollection, cartSchema)