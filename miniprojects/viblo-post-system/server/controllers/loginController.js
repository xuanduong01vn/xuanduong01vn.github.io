import Model from "../models/model.js";
import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

import userController from "./userController.js";

const loginController = {
  postLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Model.User.findOne({ email });

      if (!user) {
        res.status(400).send({
          message: "Invalid credentials",
        });
      }

      // if(!await Model.User.findOne({password})){
      //     res.status(400).send({
      //         message: "Invalid credentials"
      //     });
      // }
      if (user.password != password) {
        res.status(400).send({
          message: "Invalid credentials",
        });
      }

      const accessToken = sign(
        {
          _id: user._id,
        },
        "access_secret",
        { expiresIn: "30s" }
      );

      const refreshToken = sign(
        {
          _id: user._id,
        },
        "refresh_secret",
        { expiresIn: "1w" }
      );

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.send(user);

      // res.send( {message:"Success!"})
    } catch (err) {
      res.send(err.message);
    }
  },
  authenticateUser: async (req, res) => {
    try {
      const accessToken = req.cookies["accessToken"];
      const payload = verify(accessToken, "access_secret");

      if (!payload) {
        res.status(401).send({ message: "unauthenticated" });
      }
      const user = await Model.User.findOne(payload.id);

      if (!user) {
        res.status(401).send({ message: "unauthenticated" });
      }
      // const {password, ...data} = user;
      res.send(user);
    } catch (err) {
      res.status(401).send({ message: "unauthenticated" });
    }
  },
};

// const authenticateController= {
//     authenticateUser: async(req,res)=>{
//         try {
//             const accessToken = req.cookies['accessToken'];
//             const payload = verify(accessToken, "refresh_secret");

//             if(!payload){
//                 return res.status(401).send({ message:"unauthenticated"});
//             }
//             const user = await Model.User.findOne(payload.id);

//             if(!user){
//                 return res.status(401).send({ message:"unauthenticated"});
//             }
//             res.send(user);
//         } catch (err) {

//             return res.status(401).send({message:"unauthenticated"});
//         }
//     },
// }

export default loginController;
