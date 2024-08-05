import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'projects',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class Project extends Model<Project> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  project_id!: string; // Primary key for the project

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string; // The name of the project

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string; // A brief description of the project

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category!: string; // The category of the project

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location!: string; // The geographical location of the project

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  videoUrl?: string; // URL to the project's video (nullable)

  @Column({
    type: DataType.DECIMAL(20, 2), // Use DECIMAL for precise financial data
    allowNull: false,
  })
  projectValue!: number; // The total value of the project

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  numberOfInvestors!: number; // Number of investors involved in the project

  @Column({
    type: DataType.DECIMAL(5, 2), // Use DECIMAL for precise interest rates
    allowNull: false,
    defaultValue: 0.00,
  })
  averageInterestRate!: number; // The average interest rate offered to investors

  @Column({
    type: DataType.DECIMAL(5, 2), // Use DECIMAL for percentage progress
    allowNull: false,
    defaultValue: 0.00,
  })
  fundingProgress!: number; // The current progress towards the funding goal

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string; // The current status of the project
}
