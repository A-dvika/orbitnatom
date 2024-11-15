import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    thumbnail: {
        type: String,
    },
    tags: [
        {
            type: String,
        }
    ],
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export const Article = mongoose.model("Article", articleSchema);
