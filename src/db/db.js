import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('buzzlist', 'postgres', '21922192', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

export const connectWithDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established');

    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
