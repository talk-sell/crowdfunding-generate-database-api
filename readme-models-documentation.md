



# API Models Documentation

This API includes models for logging, notifications, authentication, campaigns, and currency cloud integrations. Below is a detailed description of each model:

## Utils Models

- `Log`: Represents a log entry capturing user actions within the application.
  - **Attributes**:
    - `userId`: The ID of the user who performed the action.
    - `componentName`: The component where the action took place.
    - `functionName`: The specific function or action executed.
    - `metadata`: Additional data related to the action.

- `Notification`: Represents a notification sent to users.
  - **Attributes**:
    - `userId`: The ID of the user receiving the notification.
    - `metadata`: Additional data related to the notification.
    - `isRead`: Indicates whether the notification has been read.

## Auth Models

- `User`: Represents users of the platform, including their authentication and role information.
  - **Attributes**:
    - `email`: The user's email address.
    - `name`: The user's full name.
    - `picture`: The user's profile picture URL.
    - `phoneNumber`: The user's contact phone number.
    - `emailVerified`: Boolean indicating if the user's email is verified.
    - `kycVerified`: Boolean indicating if the user's KYC is verified.
    - `role`: The user's role within the platform (`Admin`, `Manager`, `Project Analyst`, `User`).

- `UserIdentity`: Contains detailed identity information of the users.
  - **Attributes**:
    - `userId`: The ID of the user.
    - `firstName`: The user's first name.
    - `lastName`: The user's last name.
    - `email`: The user's email address.
    - `phoneNumber`: The user's phone number.
    - `nationality`: The user's nationality.
    - `documentNumber`: The user's identification document number.
    - `documentType`: The type of identification document.
    - `country`, `city`, `postalCode`, `street`, `number`, `addressOptional`: User's address details.
    - `issueDate`: The date the identification document was issued.
    - `expirationDate`: The expiration date of the identification document.
    - `countryOfIssue`: The country where the identification document was issued.

## Campaign Models

- `Project`: Represents a crowdfunding project on the platform.
  - **Attributes**:
    - `name`: The name of the project.
    - `description`: A brief description of the project.
    - `category`: The category of the project.
    - `location`: The geographical location of the project.
    - `videoUrl`: URL to the project's video.
    - `ProjectValue`: The total value of the project.
    - `numberOfInvestors`: Number of investors involved in the project.
    - `averageInterestRate`: The average interest rate offered to investors.
    - `fundingProgress`: The current progress towards the funding goal.
    - `status`: The current status of the project.

- `Campaign`: Represents an individual fundraising campaign for a project.
  - **Attributes**:
    - `projectId`: The ID of the associated project.
    - `name`: The name of the campaign.
    - `description`: A brief description of the campaign.
    - `videoUrl`: URL to the campaign's video.
    - `fundingStartDate`: The date when funding begins.
    - `fundingEndDate`: The date when funding ends.
    - `min_investment`: Minimum investment amount required.
    - `min_funding`: Minimum funding goal.
    - `max_funding`: Maximum funding cap.
    - `numberOfInvestors`: Number of investors participating in the campaign.
    - `interestRate`: The interest rate offered to investors.
    - `fundingProgress`: The current progress towards the funding goal.
    - `status`: The current status of the campaign.

- `CampaignGallery`: Stores images related to a campaign.
  - **Attributes**:
    - `campaignId`: The ID of the associated campaign.
    - `imageUrl`: URL to the campaign image.

- `CampaignDocument`: Represents documents associated with a campaign.
  - **Attributes**:
    - `campaignId`: The ID of the associated campaign.
    - `name`: The name of the document.
    - `file`: The document file.
    - `approved`: Boolean indicating if the document is approved.
    - `message`: Additional message or comments about the document.

- `CampaignReward`: Represents rewards for different investment tiers in a campaign.
  - **Attributes**:
    - `campaignId`: The ID of the associated campaign.
    - `tierName`: The name of the investment tier.
    - `minimumInvestment`: The minimum investment required for this tier.
    - `perks`: The perks associated with this investment tier.

- `CampaignSwotAnalysis`: Represents SWOT analysis entries for a campaign.
  - **Attributes**:
    - `campaignId`: The ID of the associated campaign.
    - `category`: The SWOT category (`strength`, `weakness`, `opportunity`, `threat`).
    - `description`: The description of the SWOT analysis point.

- `CampaignFAQ`: Stores frequently asked questions related to a campaign.
  - **Attributes**:
    - `campaignId`: The ID of the associated campaign.
    - `question`: The question being asked.
    - `answer`: The answer to the question.

## CurrencyCloud Models

- `Account`: Represents an account within the CurrencyCloud system.
  - **Attributes**:
    - `account_name`: The name of the account.
    - `legal_entity_type`: The legal entity type of the account holder.
    - `street`, `city`, `country`, `postal_code`: Address details of the account holder.
    - `brand`: The brand associated with the account.
    - `your_reference`: A reference identifier for the account.
    - `status`: The current status of the account.
    - `state_or_province`: The state or province of the account holder.
    - `spread_table`: The spread table associated with the account.
    - `api_trading`, `online_trading`, `phone_trading`: Booleans indicating trading capabilities.
    - `identification_type`: The type of identification used for the account.
    - `identification_value`: The identification value.
    - `terms_and_conditions_accepted`: Boolean indicating if terms and conditions are accepted.

- `Balance`: Represents the balance of an account in a specific currency.
  - **Attributes**:
    - `account_id`: The ID of the account.
    - `currency`: The currency of the balance.
    - `amount`: The amount in the balance.

- `Beneficiary`: Represents a beneficiary within the CurrencyCloud system.
  - **Attributes**:
    - `bank_account_holder_name`: The name of the bank account holder.
    - `name`, `email`: Name and email of the beneficiary.
    - `payment_types`: The types of payments allowed.
    - `beneficiary_address`, `beneficiary_country`, `beneficiary_entity_type`: Beneficiary's address and entity details.
    - `beneficiary_company_name`, `beneficiary_first_name`, `beneficiary_last_name`: Beneficiary's personal details.
    - `beneficiary_city`, `beneficiary_postcode`, `beneficiary_state_or_province`: Beneficiary's location details.
    - `beneficiary_date_of_birth`: Beneficiary's date of birth.
    - `beneficiary_identification_type`, `beneficiary_identification_value`: Beneficiary's identification details.
    - `bank_country`, `bank_name`, `bank_account_type`: Bank details for the beneficiary.
    - `currency`: The currency for the beneficiary.
    - `account_number`, `routing_code_type_1`, `routing_code_value_1`, `routing_code_type_2`, `routing_code_value_2`: Banking routing details.
    - `bic_swift`, `iban`: Bank identification codes.
    - `default_beneficiary`: Boolean indicating if this is the default beneficiary.
    - `creator_contact_id`: The ID of the contact who created the beneficiary.
    - `bank_address`: Address of the beneficiary's bank.

- `Contact`: Represents a contact within the CurrencyCloud system.
  - **Attributes**:
    - `login_id`: The login ID for the contact.
    - `first_name`, `last_name`: The contact's personal name.
    - `account_id`: The ID of the associated account.
    - `account_name`: The name of the associated account.
    - `status`: The current status of the contact.
    - `locale`, `timezone`: Locale and timezone settings for the contact.
    - `email_address`, `mobile_phone_number`, `phone_number`: Contact details.
    - `your_reference`: A reference identifier for the contact.
    - `date_of_birth`: The contact's date of birth.

- `Transfer`: Represents a transfer between accounts.
  - **Attributes**:
    - `source_account_id`: The ID of the source account.
    - `destination_account_id`: The ID of the destination account.
    - `currency`: The currency being transferred.
    - `amount`: The amount being transferred.
    - `status`: The current status of the transfer.
    - `reason`: The reason for the transfer.
    - `unique_request_id`: A unique identifier for the transfer request.

- `Wallet`: Represents a wallet within the platform.
  - **Attributes**:
    - `your_reference`: A reference identifier for the wallet.
    - `balance`: The current balance of the wallet.
    - `earning`, `bonus`: Additional earnings and bonuses in the wallet.
    - `is_for`: Indicates if the wallet is associated with a `user` or a `campaign`.

- `Investments`: Represents an investment made by a user in a campaign.
  - **Attributes**:
    - `user_id`: The ID of the user making the investment.
    - `campaign_id`: The ID of the campaign being invested in.
    - `amount`: The amount of the investment.
    - `interestRate`: The interest rate associated with the investment.
    - `remaining_interest`: The remaining interest to be paid.
    - `invested_at`: The date of the investment.
    - `status`: The current status of the investment.

- `InterestPayment`: Represents a payment of interest to an investor.
  - **Attributes**:
    - `investmentId`: The ID of the associated investment.
    - `paymentDate`: The date of the payment.
    - `amount`: The amount of interest paid.
    - `mainInvestmentReceived`: Indicates if the main investment has been received.
    - `remainingInterest`: The remaining interest to be paid.


