const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [
        {
            questionText: { type: String, required: true },
            options: [{ type: String }],
            correctAnswer: { type: String, required: true },
        }
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

export const Quiz = mongoose.model("Quiz", quizSchema);
