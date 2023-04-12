import express from "express"
import mongoose from "mongoose"
import multer from "multer"
import cors from "cors"


import checkAuth from "./utils/checkAuth.js"

import projectRouter from "./routes/projects.routes.js"
import blogRouter from "./routes/blog.routes.js"
import adminRouter from "./routes/admin.routes.js"
import teamRouter from "./routes/team.routes.js"

const PORT = process.env.PORT || 5000

mongoose.connect("mongodb+srv://smuzzzzzzi:qM-tar2-G2khApY@internotest.z2falak.mongodb.net/app?retryWrites=true&w=majority")
        .then(() => console.log("DB ok"))
        .catch((err) => console.log("DB error", err));

const app = express()

const storage = multer.diskStorage({
        destination: (_, __, cb) => {
                cb(null, "uploads");
        },
        filename: (_, file, cb) => {
                cb(null, file.originalname);
        },
})

const upload = multer({ storage })

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
        res.json({
                url: `/uploads/${req.file.originalname}`
        })
})

app.use(express.json())
app.use(cors())

app.use("/uploads", express.static("uploads"))

app.use("/api", projectRouter)    
app.use("/api", blogRouter)
app.use("/api", teamRouter)
app.use("/", adminRouter)

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
