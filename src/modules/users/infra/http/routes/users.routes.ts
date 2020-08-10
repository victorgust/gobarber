import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

// import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthnticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/', async (request, response) => {
  return response.json('Hello');
});

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthnticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
