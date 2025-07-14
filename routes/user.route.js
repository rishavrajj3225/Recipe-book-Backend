import { Router } from "express";
import {registerUser, loginUser,findUserById} from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.get("/:id", async (req, res, next) => {
  try {
    const user = await findUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error); 
  }
});

export default router;