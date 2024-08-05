import { Table, Column, Model, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import { Project } from './Project'; // Assuming you have a Project model to reference

@Table({
  tableName: 'campaigns',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class Campaign extends Model<Campaign> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  campaign_id!: string; // Primary key for the campaign

  @ForeignKey(() => Project)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  projectId!: string; // The ID of the associated project (foreign key)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string; // The name of the campaign

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string; // A brief description of the campaign

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  videoUrl?: string; // URL to the campaign's video (nullable)

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  fundingStartDate!: Date; // The date when funding begins

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  fundingEndDate!: Date; // The date when funding ends

  @Column({
    type: DataType.DECIMAL(20, 2),
    allowNull: false,
  })
  min_investment!: number; // Minimum investment amount required

  @Column({
    type: DataType.DECIMAL(20, 2),
    allowNull: false,
  })
  min_funding!: number; // Minimum funding goal

  @Column({
    type: DataType.DECIMAL(20, 2),
    allowNull: false,
  })
  max_funding!: number; // Maximum funding cap

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  numberOfInvestors!: number; // Number of investors participating in the campaign

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0.00,
  })
  interestRate!: number; // The interest rate offered to investors

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0.00,
  })
  fundingProgress!: number; // The current progress towards the funding goal

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string; // The current status of the campaign
}
