const topicSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
    ],
    articles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Article",
        }
    ]
}, { timestamps: true });

export const Topic = mongoose.model("Topic", topicSchema);
