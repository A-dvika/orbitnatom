const forumThreadSchema = new Schema({
    title: {
        type: String,
        required: true,
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
    replies: [
        {
            author: { type: Schema.Types.ObjectId, ref: "User" },
            content: { type: String },
            createdAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });

export const ForumThread = mongoose.model("ForumThread", forumThreadSchema);
