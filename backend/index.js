import express  from "express";
const app = express();
import userRoutes from "./routes/Users.js"
import commentsRoutes from "./routes/Comments.js"
import likeRoutes from "./routes/Likes.js"
import postRoutes from "./routes/Posts.js"
import loginRoutes from "./routes/Login.js"
import cors from "cors"
import cookieParser from "cookie-parser";

// Middlewares
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(cookieParser())

app.use("/api/users", userRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/loginAuth", loginRoutes);

app.listen(8800, ()=>{
    console.log("API working")
})