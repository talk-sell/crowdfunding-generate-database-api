import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'contacts',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class Contact extends Model<Contact> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contact_id!: string; // Primary key for the contact

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  login_id!: string; // The login ID associated with the user

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string; // The first name of the contact

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string; // The last name of the contact

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  account_id!: string; // The ID of the account associated with the contact

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  account_name!: string; // The name of the account associated with the contact

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string; // The status of the contact (e.g., enabled)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  locale!: string; // The locale setting for the contact (e.g., en)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  timezone!: string; // The timezone of the contact

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email_address!: string; // The email address of the contact

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mobile_phone_number?: string; // The mobile phone number of the contact (if provided)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone_number?: string; // The phone number of the contact (if provided)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  your_reference?: string; // User-provided reference (if any)

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  date_of_birth?: string; // The date of birth of the contact (if provided)

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: string; // Timestamp when the contact was created

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updated_at!: string; // Timestamp when the contact was last updated
}
