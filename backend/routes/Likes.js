import express from "express";
import  {getLikes}  from "../Controllers/Likes.js";

const router = express.Router();

router.get("/", getLikes);

export default router