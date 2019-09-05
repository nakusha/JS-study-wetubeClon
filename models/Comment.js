import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    }/*,
    Video와 연결시키려면 comment에 video ID를 가지고있거나 Video에 Comment[]를 가지고 있어야함
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
    */
});

const model = mongoose.model("Comment", CommentSchema);

export default model;