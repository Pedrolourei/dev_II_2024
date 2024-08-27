import { Request, Response, Router } from "express";
import UserRepository from "../repositories/UserRepository";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.getAllUsers);
    this.router.post("/", this.createUser);
    this.router.get("/:id", this.getUserById);
    this.router.put("/:id", this.updateUser);
    this.router.delete("/:id", this.removeUser);
  }

  private async getAllUsers(req: Request, res: Response) {
    const users = await UserRepository.getUsers();
    res.status(200).json(users);
  }

  private async createUser(req: Request, res: Response) {
    const user = await UserRepository.newUser(req.body);
    res.status(200).json(user);
  }

  private async getUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await UserRepository.getUserById(id);
    res.status(200).json(user);
  }

  private async updateUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await UserRepository.updateUser(id, req.body);
    res.status(201).json(user);
  }

  private async removeUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await UserRepository.removeUser(id);
    res.status(201).json({ message: "Registro removido com sucesso" });
  }
}

const userRouter = new UserRouter().router;

export default userRouter;