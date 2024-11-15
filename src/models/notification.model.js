const notificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    link: {
        type: String,
    }
}, { timestamps: true });

export const Notification = mongoose.model("Notification", notificationSchema);
