import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String
    },
    copyPublicId: {
        type: String,
    }
})

export default mongoose.model('noteSchema', noteSchema)