const express = require('express');
const helmet = require('helmet');


const db = require('./data/db-config.js');

const projectsRouter = require('./projects/project-router.js')
const resourcesRouter = require('./projects/resources-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: "Stop projecting your feelings, please." })
})


module.exports = server;
