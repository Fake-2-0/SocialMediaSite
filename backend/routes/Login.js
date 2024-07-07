import Express from "express";
import  {login, register, logout}  from "../Controllers/Login.js";

const router = Express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router