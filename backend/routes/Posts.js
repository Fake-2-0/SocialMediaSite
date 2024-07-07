import express from "express";
import  {getPosts, addPost}  from "../Controllers/Posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);

export default router