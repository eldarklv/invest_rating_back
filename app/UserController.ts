import { Request, Response } from 'express';
import UserService from './UserService';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await UserService.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const user = await UserService.getById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async edit(req: Request, res: Response) {
    try {
      const updatedUser = await UserService.edit(req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.delete(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
