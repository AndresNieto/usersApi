// {
//     "type": "postgres",
//     "host": "localhost",
//     "port": 5432,
//     "username": "admin",
//     "password": "root",
//     "database": "test_db",
//     "entities": ["src/**/*.entity{.ts,.js}"],
//     "synchronize": false,
//     "migrationsTableName": "migrations",
//     "logging": true,
//     "migrations": ["src/database/migrations/*{.ts}"],
//     "cli": {
//         "migrationsDir": "src/database/migrations"
//     }
// }

import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'root',
  database: 'test_db',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/**/**.entity{.ts}'],
  migrations: ["src/database/migrations/*{.ts}"],
});

// export const connectionSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "admin",
//   password: "root",
//   database: "test_db",
//   entities: ["src/**/*.entity{.ts,.js}"],
//   synchronize: false,
//   migrationsTableName: "migrations",
//   logging: true,
//   migrations: ["src/database/migrations/*{.ts}"],
// });
