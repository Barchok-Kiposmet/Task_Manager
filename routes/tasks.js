const express = require("express");
const tasksModels = require("./../models/tasks");

const router = express.Router();

router.post("/", async function (req, res) {
  const data = new tasksModels({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async function (req, res) {
  try {
    const data = await tasksModels.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/:id", async function (req, res) {
  const id = req.params.id;
  const updateData =req.body;
  try {
    const dataUpdate = await tasksModels.findByIdAndUpdate(id, updateData, {new:true});
    res.status(200).json(dataUpdate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;