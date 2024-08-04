import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'beneficiaries',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
  underscored: true, // Use snake_case for column names
  createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
  updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class Beneficiary extends Model<Beneficiary> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bank_account_holder_name!: string; // Name of the bank account holder

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string; // Name of the beneficiary

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  email?: string; // Email address of the beneficiary (nullable)

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  payment_types!: string[]; // List of payment types available for the beneficiary

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  beneficiary_address!: string[]; // Address of the beneficiary

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_country?: string; // Country of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_entity_type?: string; // Type of beneficiary entity (e.g., individual, company)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_company_name?: string; // Company name of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_first_name?: string; // First name of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_last_name?: string; // Last name of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_city?: string; // City of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_postcode?: string; // Postcode of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_state_or_province?: string; // State or province of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_date_of_birth?: string; // Date of birth of the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_identification_type?: string; // Identification type for the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_identification_value?: string; // Identification value for the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bank_country!: string; // Country of the beneficiary's bank

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bank_name!: string; // Name of the beneficiary's bank

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  bank_account_type?: string; // Type of the bank account (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  currency!: string; // Currency associated with the beneficiary

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  account_number!: string; // Bank account number

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  routing_code_type_1?: string; // Type of the first routing code (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  routing_code_value_1?: string; // Value of the first routing code (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  routing_code_type_2?: string; // Type of the second routing code (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  routing_code_value_2?: string; // Value of the second routing code (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  bic_swift?: string; // BIC/SWIFT code (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  iban?: string; // IBAN (nullable)

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  default_beneficiary!: boolean; // Indicates if this is the default beneficiary

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  creator_contact_id!: string; // ID of the contact who created the beneficiary

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  bank_address!: string[]; // Address of the bank

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date; // Timestamp when the beneficiary was created

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date; // Timestamp when the beneficiary was last updated

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  beneficiary_external_reference?: string; // External reference for the beneficiary (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  business_nature?: string; // Nature of the beneficiary's business (nullable)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  company_website?: string; // Website of the beneficiary's company (nullable)
}
