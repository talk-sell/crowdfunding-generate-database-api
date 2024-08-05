import { Table, Column, Model, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import { Campaign } from './Campaign'; // Assuming you have a Campaign model to reference

@Table({
  tableName: 'campaign_faqs',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class CampaignFAQ extends Model<CampaignFAQ> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id!: string; // Primary key for the FAQ entry

  @ForeignKey(() => Campaign)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  campaignId!: string; // The ID of the associated campaign (foreign key)

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  question!: string; // The question being asked

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  answer!: string; // The answer to the question
}
