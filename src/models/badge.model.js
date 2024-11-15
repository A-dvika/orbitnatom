const badgeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ]
}, { timestamps: true });

export const Badge = mongoose.model("Badge", badgeSchema);
