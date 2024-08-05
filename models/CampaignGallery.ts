import { Table, Column, Model, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import { Campaign } from './Campaign'; // Assuming you have a Campaign model to reference

@Table({
  tableName: 'campaign_galleries',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class CampaignGallery extends Model<CampaignGallery> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id!: string; // Primary key for the campaign gallery

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
  imageUrl!: string; // URL to the campaign image
}
