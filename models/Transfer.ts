import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'transfers',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class Transfer extends Model<Transfer> {

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  transfer_id!: string; // Primary key for the transfer

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  source_account_id!: string; // The ID of the source account

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  destination_account_id!: string; // The ID of the destination account

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  currency!: string; // The currency of the transfer (e.g., GBP, USD)

  @Column({
    type: DataType.DECIMAL(20, 2), // Use DECIMAL for precise financial data
    allowNull: false,
  })
  amount!: number; // The amount transferred

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string; // The status of the transfer (e.g., pending, completed, cancelled)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  reason?: string; // Optional reason for the transfer

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  unique_request_id?: string; // Optional unique request ID for idempotency

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date; // Timestamp when the transfer was created

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date; // Timestamp when the transfer was last updated

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  completed_at?: Date; // Optional timestamp when the transfer was completed
}
