import express from 'express';
import UserController from './UserController';

const userRouter = express.Router();

userRouter.post('/create', UserController.create);

userRouter.get('/', UserController.getAll);

userRouter.get('/:id', UserController.getById);

userRouter.put('/edit', UserController.edit);

userRouter.delete('/delete/:id', UserController.delete);

export default userRouter;
