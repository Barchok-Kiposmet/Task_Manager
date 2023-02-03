const express = require('express');
const tasksModels =require('./models/tasks');
const router = express.Router();

router.post('/',async function (req, res) {
    const data = req.body;
    try { 
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      
    } catch (error) {
    res.status(400).json({ message:error.message});
    }
  });

  module.exports = router;
