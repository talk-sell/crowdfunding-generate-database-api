# Crowdfunding Generate Database API

This API is responsible for generating the database schema for the crowdfunding platform.


## Setup

1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Create a `.env` file based on the provided example.
4. Run `npm run migrate` to apply migrations.
5. Start the API with `npm run start`.

## Scripts

- `migrate`: Run database migrations.
- `revert-migration`: Revert all migrations.
- `build`: Compile TypeScript to JavaScript.
- `start`: Start the server using compiled JavaScript files.
- `dev`: Start the server using `ts-node`.

## Models

This API includes models for logging, notifications, authentication, campaigns, and currency cloud integrations. Below is a detailed description of each model:

## Utils Models
- `Log`: Represents a log entry capturing user actions within the application.
- `Notification`: Represents a notification sent to users.

## Auth Models
- `User`: Represents users of the platform, including their authentication and role information.
- `UserIdentity`: Contains detailed identity information of the users.

## Campaign Models
- `Project`: Represents a crowdfunding project on the platform.
- `Campaign`: Represents an individual fundraising campaign for a project.
- `CampaignGallery`: Stores images related to a campaign.
- `CampaignDocument`: Represents documents associated with a campaign.
- `CampaignReward`: Represents rewards for different investment tiers in a campaign.
- `CampaignSwotAnalysis`: Represents SWOT analysis entries for a campaign.
- `CampaignFAQ`: Stores frequently asked questions related to a campaign.

## CurrencyCloud Models
- `Account`: Represents an account within the CurrencyCloud system.
- `Balance`: Represents the balance of an account in a specific currency.
- `Beneficiary`: Represents a beneficiary within the CurrencyCloud system.
- `Contact`: Represents a contact within the CurrencyCloud system.
- `Transfer`: Represents a transfer between accounts.
- `Walet`: Represents a wallet within the platform.
- `Investments`: Represents an investment made by a user in a campaign.
- `InterestPayment`: Represents a payment of interest to an investor.


## License

MIT License
