const Task = require('../models').Task;

//Get all tasks
  const getAll = async function ( req, res ) {
    res.setHeader('Content-Type', 'application/json');
    
    [err, tasks] = await to(Task.findAll());

    if (err) {
      return ReE(res, err, 404);
    }

    return ReS(res, tasks, 200);
}

module.exports.getAll = getAll;


//Update a task
  const complete = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    let err, task;
    [err, task] = await to(Task.update(
      {complete: true}, {where: {id: req.body.id}
    }));
    
    if (err) {
      return ReE(res, err, 422);
    }
    // Success
    return ReS(res, task, 200);
  }
  
  module.exports.complete = complete;
  
// Create 
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

   // Validate that an email and password has been provided 
    let err, task;

    [err, task] = await to(Task.create(body));
    if(err) {
    console.log(err);
    return ReE(res, err, 422);
    } 
    // Success
    return ReS(res, task, 201);
    }

  module.exports.create = create;






