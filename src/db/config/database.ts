import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING as string);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize, connect };
