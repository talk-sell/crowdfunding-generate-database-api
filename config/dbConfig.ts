import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Account } from '../models/Account';
import { Balance } from '../models/Balance';
import { Beneficiary } from '../models/Beneficiary';
import { Contact } from '../models/Contact';
import { Transfer } from '../models/Transfer';
import { User } from '../models/User';
import { UserIdentity } from '../models/UserIdentity';
import { Campaign } from '../models/Campaign';
import { CampaignDocument } from '../models/CampaignDocument';
import { CampaignFAQ } from '../models/CampaignFAQ';
import { CampaignGallery } from '../models/CampaignGallery';
import { CampaignReward } from '../models/CampaignReward';
import { CampaignSwotAnalysis } from '../models/CampaignSwotAnalysis';
import { Project } from '../models/Project';

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
    Project, Campaign, CampaignGallery, CampaignDocument, CampaignReward, CampaignSwotAnalysis, CampaignFAQ, // models for campaign api integration
    Account, Contact, Beneficiary, Balance, Transfer, // models for currencycloud integration
  ],
});

export { sequelize };
