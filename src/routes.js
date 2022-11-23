const express = require('express');
const routes = express.Router();

const EmployeeController = require('./EmployeeController');

routes.get('/', EmployeeController.home);
routes.get('/funcionario', EmployeeController.index);
routes.get('/funcionario/:nome', EmployeeController.show);
routes.post('/funcionario', EmployeeController.create);
routes.delete('/funcionario/:matricula', EmployeeController.delete);

module.exports = routes;