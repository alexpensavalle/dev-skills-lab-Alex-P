// The ids can be generated using:
// Date.now() % 1000000
const Skills = [
  {id: 125223, skill: 'OOP'},
  {id: 127904, skill: 'JAVA'},
  {id: 139608, skill: 'Node.js'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, skill) {
  // Find the index based on the id of the skill object
  const idx = Skills.findIndex(skill => skill.id === parseInt(id));
  // Ensure the id is copied over
  skill.id = parseInt(id);
  Skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  // Find the index based on the id of the skill object
  const idx = Skills.findIndex(skill => skill.id === parseInt(id));
  Skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  Skills.push(skill);
}

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return Skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
  return Skills;
}