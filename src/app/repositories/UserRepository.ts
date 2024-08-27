import User from "../entities/Users";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";
import ErrorExtension from "../utils/ErrorExtension";

class UserRepository {
  private static usersRepository = AppDataSource.getRepository(User);

  static async getUsers(): Promise<IUser[]> {
    return this.usersRepository.find();
  }

  static async newUser(user: IUser): Promise<IUser> {
    const createdUser = await this.usersRepository.save(user);
    return createdUser as IUser;
  }

  static async getUserById(id: number): Promise<IUser | null> {
    return this.usersRepository.findOneBy({ id });
  }

  static async updateUser(id: number, user: IUser): Promise<IUser> {
    await this.usersRepository.update(id, user);

    return user as IUser;
  }

  static async removeUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

export default UserRepository;