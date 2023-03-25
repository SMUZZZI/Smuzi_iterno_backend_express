import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    projectid: { type: String, required: true, },
    title: { type: String, required: true, },
    tag: { type: String, required: true, },
    img: { type: String, required: true, },
    client: { type: String, required: true, },
    category: { type: String, required: true, },
    tags: [ { type: String, required: true, } ],
    link: { type: String, required: true, },
    mainTitle: { type: String, required: true, },
    mainText: { type: String, required: true, },
}, {
    timestamps: true,
});

export default mongoose.model("Project", ProjectSchema);