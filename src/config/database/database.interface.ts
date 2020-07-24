export type IDatabaseConfig = {
  type: string | any,
  host: string,
  username: string,
  password: string,
  database: string,
  port?: string | number,
  entities: string[],
  migrations: string[],
  cli?: {
    migrationsDir: string
  }
} & {
  [key: string]: any
}