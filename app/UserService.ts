import { UserInterface } from '../Interfaces/User.Interface';
import User from './User';

class UserService {
  async create(user: object) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async getAll() {
    const users = await User.find();
    return users;
  }

  async getById(id: string) {
    const user = await User.findById(id);
    return user;
  }

  async edit(user: UserInterface) {
    if (!user._id) {
      throw new Error('ID не указан');
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true
    });
    return updatedUser;
  }

  async delete(id: string) {
    if (!id) {
      throw new Error('ID не указан');
    }
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default new UserService();
