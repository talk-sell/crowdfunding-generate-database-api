import { Table, Column, Model, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import { Campaign } from './Campaign'; // Assuming you have a Campaign model to reference

@Table({
  tableName: 'campaign_rewards',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class CampaignReward extends Model<CampaignReward> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id!: string; // Primary key for the campaign reward

  @ForeignKey(() => Campaign)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  campaignId!: string; // The ID of the associated campaign (foreign key)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tierName!: string; // The name of the investment tier

  @Column({
    type: DataType.DECIMAL(20, 2),
    allowNull: false,
  })
  minimumInvestment!: number; // The minimum investment required for this tier

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  perks!: string; // The perks associated with this investment tier
}
