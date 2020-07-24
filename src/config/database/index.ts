import { IDatabaseConfig } from '@config/database/database.interface';

const {
  DB_USERNAME,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_NAME,
} = process.env;

export const getDatabaseConfig = (): IDatabaseConfig => {
  const config: IDatabaseConfig = {
    type: 'mssql',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port: DB_PORT ? parseInt(DB_PORT) : 1433,
    database: DB_NAME,
    entities: ['dist/src/**/*.entity.js'],
    migrations: ['dist/src/migrations/*.{ts,js}'],
    cli: {
      migrationsDir: './src/migrations',
    },
    options: {
      enableArithAbort: true,
    },
  };
  return config;
}