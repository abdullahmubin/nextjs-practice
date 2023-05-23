import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['sunglass', 'headphones', 'hat'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema);