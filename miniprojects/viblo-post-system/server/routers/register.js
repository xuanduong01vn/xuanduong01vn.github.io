import registerController from "../controllers/registerController.js";
import express from "express";
import JWT from "jsonwebtoken";
import passport from "passport";
import Model from "../models/model.js";
// import passportConfig from "../config/passport";

const router = express.Router();

router.post('/',registerController.postRegister);

// router.post("/register/", (req, res) => {
//   const { email, password, isAdmin } = req.body;
//   //kiem tra username co ton tai khong
//   Model.User.findOne({ email }, (err, user) => {
//     if (err) {
//       res.status(500).json({
//         message: { msgBody: "Error", msgError: true },
//       });
//     }

//     if (user) {
//       res.status(400).json({
//         message: { msgBody: "Email này đã được đăng kí!", msgError: true },
//       });
//     } else {
//       const newUser = new Model.User({ email, password, isAdmin });
//       newUser.save((err) => {
//         if (!err)
//           res.status(500).json({
//             message: { msgBody: "Error", msgError: true },
//           });
//         else {
//           res.status(200).json({
//             message: { msgBody: "Đăng kí thàng công!", msgError: false },
//           });
//         }
//       });
//     }
//   });
// });

// const signToken = (_id) => {
//   return JWT.sign(
//     {
//       iss: "xuanduong",
//       sub: _id,
//     },
//     "xuanduong",
//     { expiresIn: "1d" }
//   );
// };

// router.post("/login",passport.authenticate("local", { session: false }),(req, res) => {
//     if (req.isAuthenticated()) {
//       const { _id, email, isAdmin } = req.user;
//       const token = signToken(_id);
//       res.cookie("access_token", token, { httpOnly: true, sameSite: true });
//       res.status(200).json({
//         isAuthenticated: true,
//         user: { _id, email, isAdmin },
//       });
//     }
//   }
// );




export default router;
