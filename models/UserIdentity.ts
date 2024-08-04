import { Table, Column, Model, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './User'; // Assuming you have a User model to reference

@Table({
  tableName: 'user_identities',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class UserIdentity extends Model<UserIdentity> {

  @PrimaryKey
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId!: string; // The ID of the user (foreign key)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string; // The user's first name

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string; // The user's last name

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string; // The user's email address

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phoneNumber?: string; // The user's phone number (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nationality!: string; // The user's nationality

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  documentNumber!: string; // The user's identification document number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  documentType!: string; // The type of identification document

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country!: string; // User's country of residence

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string; // User's city of residence

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postalCode!: string; // User's postal code

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street!: string; // User's street address

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number!: string; // User's street number

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  addressOptional?: string; // Optional additional address information (nullable)

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  issueDate!: Date; // The date the identification document was issued

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  expirationDate!: Date; // The expiration date of the identification document

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  countryOfIssue!: string; // The country where the identification document was issued
}
