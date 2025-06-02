const Test = require('../models/testModel');

exports.getAllTests = async (req, res) => {
  try {
    const data = await Test.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};