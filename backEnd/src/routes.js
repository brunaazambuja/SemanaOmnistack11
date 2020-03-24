const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create); /* login de ong */

routes.get('/ongs', OngController.index); /* listagem de ongs */
routes.post('/ongs', OngController.create); /* cadastro de ongs */

routes.get('/profile', ProfileController.index); /* listagem de todos os casos da ong logada */

routes.post('/incidents', IncidentController.create); /* cadastro de casos */
routes.get('/incidents', IncidentController.index); /* listagem de casos */
routes.delete('/incidents/:id', IncidentController.delete); /* deleção de caso específico */


module.exports = routes;