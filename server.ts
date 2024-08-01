import connectToDatabase from './db';
import { sequelize } from './config/dbConfig';

const startServer = async () => {
  await connectToDatabase();
  
  try {
    await sequelize.sync(); // Sync all models at once
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

startServer();
