import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'trip',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Désactiver en production
});