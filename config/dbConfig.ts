import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Account } from '../models/Account';
import { Balance } from '../models/Balance';
import { Beneficiary } from '../models/Beneficiary';
import { Contact } from '../models/Contact';
import { Transfer } from '../models/Transfer';

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  models: [
    Account, Contact, Beneficiary, Balance, Transfer
  ],
});

export { sequelize };
