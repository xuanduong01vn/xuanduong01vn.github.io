import Model from "../models/model.js";
import { APIfeatures } from "../lib/features.js";

const blogController = {
  getBlogs: async (req, res) => {
    try {
      let features = new APIfeatures(Model.Blog.find().populate("user").populate("topic"), req.query)
        .paginating()
        .sorting()
        .searching()
        .filtering();

      const allBlogs = await features.query;

      res.status(200).json(allBlogs);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  getBlog: async (req, res) => {
    try {
      const blog = await Model.Blog.findById(req.params.id).populate("user");
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  addBlog: async (req, res) => {
    try {
      const newBlog = await Model.Blog(req.body);
      const saveBlog = await newBlog.save();
      res.status(200).json(saveBlog);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  updateBlog: async (req, res) => {
    try {
      const blog = await Model.Blog.findById(req.params.id);
      await blog.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  deleteBlog: async (req, res) => {
    try {
      const blog = await Model.Blog.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

export default blogController;
