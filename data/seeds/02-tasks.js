
exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        {project_id: 1, 
          description: "Task 1 for Project 1"},
        {project_id: 1, 
          description: "Task 2 for Project 1"},
        {project_id: 2, 
          description: "Task 1 for Project 2"},
        {project_id: 2, 
          description: "Task 2 for Project 2"},
        {project_id: 3, 
          description: "Task 1 for Project 3"},
        {project_id: 2, 
          description: "Task 2 for Project 3"}
        
      ])
      
};
