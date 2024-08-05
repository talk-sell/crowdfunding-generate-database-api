import { Table, Column, Model, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import { Campaign } from './Campaign'; // Assuming you have a Campaign model to reference

@Table({
  tableName: 'campaign_swot_analyses',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class CampaignSwotAnalysis extends Model<CampaignSwotAnalysis> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id!: string; // Primary key for the SWOT analysis entry

  @ForeignKey(() => Campaign)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  campaignId!: string; // The ID of the associated campaign (foreign key)

  @Column({
    type: DataType.ENUM('strength', 'weakness', 'opportunity', 'threat'),
    allowNull: false,
  })
  category!: string; // The SWOT category

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string; // The description of the SWOT analysis point
}
