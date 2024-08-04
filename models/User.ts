import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class User extends Model<User> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  user_id!: string; // Primary key for the user

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string; // The user's email address

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string; // The user's full name

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  picture?: string; // The user's profile picture URL (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phoneNumber?: string; // The user's contact phone number (nullable)

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  emailVerified!: boolean; // Boolean indicating if the user's email is verified

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  kycVerified!: boolean; // Boolean indicating if the user's KYC is verified

  @Column({
    type: DataType.ENUM('Admin', 'Manager', 'Project Analyst', 'User'),
    allowNull: false,
    defaultValue: 'User',
  })
  role!: string; // The user's role within the platform

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date; // Timestamp when the user was created

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date; // Timestamp when the user was last updated
}
