import express from "express";
import  {getLikes}  from "../Controllers/Likes.js";

const router = express.Router();

router.get("/find/:likeId", getLikes);

export default router