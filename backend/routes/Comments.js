import Express from "express";
import  {getComments}  from "../Controllers/Comments.js";

const router = Express.Router();

router.get("/find/:commentId", getComments);

export default router