import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    tag: [ { type: String, required: true } ],
    img: { type: String, required: true, },
    text: { type: String, required: true, },
    list: [ { type: String } ],
    mainText: { type: String, required: true, },
    secondText: { type: String, required: true, },

}, {
    timestamps: true,
});

export default mongoose.model("Blog", BlogSchema);