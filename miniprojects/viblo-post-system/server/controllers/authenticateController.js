import Model from "../models/model.js";
import jwt from "jsonwebtoken";
const {verify}=jwt;


const authenticateController = {
  authenticateUser: async (req, res) => {
    try {
      const accessToken = req.cookies["accessToken"];
      const payload = verify(accessToken, "access_secret");

      if (!payload) {
        res.status(401).send({ message: "unauthenticated" });
      }
      const user = await Model.User.findOne(payload._id);

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

export default authenticateController;
