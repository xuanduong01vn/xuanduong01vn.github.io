import Model from "../models/model.js";
import { APIfeatures } from "../lib/features.js";

const topicController = {
  getTopics: async (req, res) => {
    try {
      let features = new APIfeatures(
        Model.Topic.find(),
        req.query
      )
        .paginating()
        .sorting()
        .searching()
        .filtering();

      const allTopics = await features.query;

      res.status(200).json(allTopics);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

export default topicController;
