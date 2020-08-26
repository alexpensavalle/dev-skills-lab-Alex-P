var Skills = require('../models/skills');

module.exports = {
  index,
  show,
  new: newskills,
  create,
  delete: deleteskills,
  edit,
  update,
};

function update(req, res) {
  // Need to handle the scenario where the checkbox is not checked.
  // checkbox inputs do not send anything in the form at all if they
  // are unchecked, so we need to set req.body.done accordingly.
  req.body.done = req.body.done === 'on';
  // The following will also do the job
  // req.body.done = !!req.body.done;
  Skills.update(req.params.id, req.body);
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit', {
    Skills: Skills.getOne(req.params.id)
  });
}

function deleteskills(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skills.create(req.body);
  res.redirect('/skills');
}

function newskills(req, res) {
  res.render('skills/new');
}

function index(req, res) {
  res.render('skills/index', {
    Skills: Skills.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('skills/show', {////////////
    Skills: Skills.getOne(req.params.id),
    // Would like to display the number of the skills within the list
    skillsNum: Skills.getAll().findIndex(skills => skills.id === parseInt(req.params.id)) + 1
  });
}
