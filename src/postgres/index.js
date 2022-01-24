import { createConnection } from 'typeorm';

export default async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: process.env.NODE_ENV == 'LOCALHOST',
      logging: false,
      autoReconnect: true,
      entities: ['src/postgres/model/*.js'],
    });
    console.log('Db Connection Success!');
  } catch (error) {
    console.log(error);
    console.log(`Error on connecting to Db: ${error}`);
  }
};
