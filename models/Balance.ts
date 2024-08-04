import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'balances',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class Balance extends Model<Balance> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  balance_id!: string; // Primary key for the balance

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  account_id!: string; // The ID of the account associated with the balance

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  currency!: string; // The currency code of the balance

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  amount!: string; // The balance amount available in the specified currency

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date; // The timestamp when the balance was created

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date; // The timestamp when the balance was last updated
}
