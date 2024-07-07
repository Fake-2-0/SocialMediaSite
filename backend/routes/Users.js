import Express from "express";
import  {getUser}  from "../Controllers/Users.js";

const router = Express.Router();

router.get("/find/:userId", getUser);

export default router