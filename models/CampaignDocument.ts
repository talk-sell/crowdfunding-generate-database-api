import { Table, Column, Model, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import { Campaign } from './Campaign'; // Assuming you have a Campaign model to reference

@Table({
    tableName: 'campaign_documents',
    timestamps: true, // Automatically manage createdAt and updatedAt fields
    underscored: true, // Use snake_case for column names
    createdAt: 'created_at', // Map Sequelize's `createdAt` to `created_at`
    updatedAt: 'updated_at', // Map Sequelize's `updatedAt` to `updated_at`
})
export class CampaignDocument extends Model<CampaignDocument> {

    @PrimaryKey
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    id!: string; // Primary key for the campaign document

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
    name!: string; // The name of the document

    @Column({
        type: DataType.BLOB, // Use BLOB for storing binary files
        allowNull: false,
    })
    file!: Buffer; // The document file

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    approved!: boolean; // Boolean indicating if the document is approved

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    message?: string; // Additional message or comments about the document (nullable)
}
