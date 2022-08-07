import Model from "../models/model.js";
import { APIfeatures } from "../lib/features.js";

const userController = {
  getUsers: async (req, res) => {
    try {
      let features = new APIfeatures(Model.User.find(), req.query)
        .paginating()
        .sorting()
        .searching()
        .filtering();

      const allUsers = await features.query;

      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  getUser: async (req, res) => {
    try {
      const anUser = await Model.User.findById(req.params.id);
      res.status(200).json(anUser);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  addUser: async (req, res) => {
    try {
      const newUser = await Model.User(req.body);
      const saveUser = newUser.save().then(()=>{
        res.status(200).json(saveUser);
      });
      
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await Model.User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const post = await Model.User.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

export default userController;
