import express from "express";
import generateToken from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.body.password === user.password) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invaild email or password" });
  })
);
export default userRouter;
