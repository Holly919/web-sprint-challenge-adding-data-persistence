const router = require('express').Router()
const Projects = require('./projects-model.js')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.find()
    res.json(projects)
  } catch (error) {
    next (error)
  }
})

router.get('/:id', async (req, res, next) => {
  const project = await Projects.findById(req.params.id);
  if(project) {
    res.status(200).json(project);
  } else {
    console.log(error);
    res.status(500).json({
      error: "This project could not be retreived"
    });
  }

})

router.get('/:id/tasks',  async (req,res, next) => {
  try {
  const tasks = await Projects.findTasks(req.params.id);
    res.status(200).json(tasks);
  } catch (error) {
    next (error)
  }
})

router.post('/', async (req, res, next) => {
  const project = await Projects.add(req.body)
  res.status(200).json(project)
})

router.post('/:id/tasks', async (req, res) => {
  try {
    const newTask = await Projects.addTask(req.body);
    if(newTask){
      res.status(201).json(newPost);
    } else {
      res.status(400).json({
        message: 'Missing or incorrect Data'
      });
    }
  } catch (error) {
    console.log(error)
  }
})


module.exports = router
