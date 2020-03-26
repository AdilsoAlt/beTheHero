const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//rotas para tabela de ongs
//rota para listar
routes.get('/ongs', OngController.index);
//rota para cadastro
routes.post('/ongs', OngController.create);

//rotas para tabela de incidentes
//rota para cadastrar novo incidente
routes.post('/incidents', IncidentsController.create);
//rota para listar os incidentes
routes.get('/incidents', IncidentsController.index);
//rota para deletar um incidente
routes.delete('/incidents/:id', IncidentsController.delete);


//rotas para profile controler
routes.get('/profile', ProfileController.index);

//rota para login
routes.post('/sessions', SessionController.create);


module.exports = routes;