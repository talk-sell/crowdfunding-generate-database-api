import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Account } from '../models/Account';
import { Balance } from '../models/Balance';
import { Beneficiary } from '../models/Beneficiary';
import { Contact } from '../models/Contact';
import { Transfer } from '../models/Transfer';
import { User } from '../models/User';
import { UserIdentity } from '../models/UserIdentity';

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
    User, UserIdentity, // models for authentification integration
    Account, Contact, Beneficiary, Balance, Transfer // models for currencycloud integration

  ],
});

export { sequelize };
