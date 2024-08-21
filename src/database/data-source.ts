import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1705752946855 } from "./migrations/1724200122832-CreateUsersTable";
import { CreateUsersTable1705752946855 } from "./migrations/1724200122832-CreateUsersTable"
import Users from '../app/ebtities/Users'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "projeto",
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: [CreateUsersTable1705752946855, CreateSeedUsersTable1705754028123],
  subscribers: [],
});