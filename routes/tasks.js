const express = require("express");
const tasksModels = require("./../models/tasks");

const router = express.Router();

// create an entry

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

// fetch all entries

router.get("/", async function (req, res) {
  try {
    const data = await tasksModels.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update an entry

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

// delete an entry

router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  try {
    const dataDelete = await tasksModels.findByIdAndDelete(id);
    res.status(200).json(dataDelete);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Logical for when we want to get the specific task

router.get('/:id', async function (req, res) {
  try {
    const task = await tasksModels.findById(req.params.id);
    if (!task) return res.status(404).json({message: 'Task not found'});
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

module.exports = router;