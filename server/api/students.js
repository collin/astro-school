const studentsApi = require('express').Router();
const { Student } = require('../../db/models');

studentsApi.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

module.exports = studentsApi;