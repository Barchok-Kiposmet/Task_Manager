const express = require('express');
const tasksModels =require('./../models/tasks');

const router = express.Router();

router.post('/', async function (req, res) {
      console.log(req.body)
    const data = new tasksModels({
      title: req.body.title,
      description: req.body.description
    });

    try { 
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      
    } catch (error) {
    res.status(400).json({ message:error.message});
    }
  });

  router.get('/', function (req, res) {
    res.send('Hello World')
  });



  module.exports = router;
