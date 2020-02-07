import { Router } from 'express';
import User from './app/models/User';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World' }));
routes.get('/users', UserController.index);

routes.post('/sessions', SessionController.store);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

export default routes;
