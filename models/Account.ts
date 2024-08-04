import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'accounts',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class Account extends Model<Account> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  account_name!: string; // The name of the account

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  legal_entity_type!: string; // The legal entity type of the account

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street!: string; // The street address of the account holder

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string; // The city of the account holder

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country!: string; // The country of the account holder

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  postal_code?: string; // The postal code of the account holder (optional)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  brand?: string; // The brand associated with the account (optional)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  your_reference?: string; // Reference provided by the user (optional)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  status?: string; // Status of the account (optional)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  state_or_province?: string; // The state or province of the account holder (optional)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  spread_table?: string; // Spread table associated with the account (optional)

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  api_trading?: boolean; // Indicates if API trading is enabled (optional)

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  online_trading?: boolean; // Indicates if online trading is enabled (optional)

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  phone_trading?: boolean; // Indicates if phone trading is enabled (optional)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  identification_type?: string; // Type of identification provided (optional)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  identification_value?: string; // Value of the identification provided (optional)

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  terms_and_conditions_accepted?: boolean; // Indicates if terms and conditions are accepted (optional)

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date; // Date when the account was created

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date; // Date when the account was last updated
}
