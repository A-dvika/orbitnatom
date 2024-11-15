const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
    },
    attendees: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ],
}, { timestamps: true });

export const Event = mongoose.model("Event", eventSchema);
