import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    img: { type: String, required: true, },
    name: { type: String, required: true, },
    tag: { type: String, required: true, },
    profession: { type: String, required: true, },
    description: { type: String, required: true, },
    social: {
        facebook: { type: String},
        tweeter: { type: String},
        in: { type: String},
    },
    links: {
        mail: { type: String, required: true, },
        phone: { type: String, required: true, },
        site: { type: String }
    },
    biography: { type: String, required: true, },
    qnaDis: { type: String, required: true, },
    qnaData:[
        {
            title: { type: String, required: true, },
            text: { type: String, required: true, },
        },
    ]
});

export default mongoose.model("Team", TeamSchema);