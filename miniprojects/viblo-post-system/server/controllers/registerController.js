import Model from "../models/model.js";

const registerController = {
  postRegister: async (req, res) => {
    try {
        const {email,password} = req.body;
      const newUser = await Model.User(req.body);
      const user = await Model.User.findOne({email});
      if (user) {
        res.status(400).send("Email này đã được đăng ký!");
      } else {
        const saveUser = newUser.save().then(() => {
            res.status(200).json(newUser);
        });
      }
    } catch (err) {
      res.send(err.message);
    }
  },
};

export default registerController;
