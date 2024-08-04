Here is the `README-complex-logic.md` document that details the complex logic flows, including creating accounts with associated contacts and beneficiaries after KYC verification, as well as handling the investment process:

```markdown
# API Complex Logic Documentation

This document outlines the complex logic handled by the API, including the creation of user accounts, contacts, and beneficiaries after KYC verification, and the complete investment process including transfer creation, investment recording, balance updating, and wallet updating.

## Logic 1: Post-KYC Verification Account Setup

### Overview
Once a user has successfully completed KYC verification (`kycVerified` is set to `true`), the system should automatically create an account, associated contact, and beneficiary for the user.

### API Flow
1. **User's `kycVerified` status is updated**.
2. **Create Account for the User**.
3. **Create Contact linked to the Account**.
4. **Create Beneficiary linked to the Account**.

### Request and Response Data

#### Update User KYC Verification
- **URL**: `/api/user/update/{userId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "kycVerified": true
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "User KYC status updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: User not found.

#### Create Account
- **URL**: `/api/account/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "account_name": "{user's name}",
    "legal_entity_type": "Individual",
    "street": "{user's street address}",
    "city": "{user's city}",
    "country": "{user's country}",
    "postal_code": "{user's postal code}",
    "brand": "User",
    "your_reference": "{userId}",
    "status": "Active",
    "state_or_province": "{user's state or province}",
    "spread_table": "Default",
    "api_trading": true,
    "online_trading": true,
    "phone_trading": false,
    "identification_type": "{user's document type}",
    "identification_value": "{user's document number}",
    "terms_and_conditions_accepted": true
  }
  ```
- **Response Data**:
  ```json
  {
    "accountId": "A123456",
    "message": "Account created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Account already exists.

#### Create Contact
- **URL**: `/api/contact/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "login_id": "{userId}",
    "first_name": "{user's first name}",
    "last_name": "{user's last name}",
    "account_id": "A123456",
    "account_name": "{user's name}",
    "status": "Active",
    "locale": "{user's locale}",
    "timezone": "{user's timezone}",
    "email_address": "{user's email}",
    "mobile_phone_number": "{user's mobile phone number}",
    "phone_number": "{user's phone number}",
    "your_reference": "{userId}",
    "date_of_birth": "{user's date of birth}"
  }
  ```
- **Response Data**:
  ```json
  {
    "contactId": "C78901",
    "message": "Contact created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Contact already exists.

#### Create Beneficiary
- **URL**: `/api/beneficiary/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "bank_account_holder_name": "{user's name}",
    "name": "{user's name}",
    "email": "{user's email}",
    "payment_types": ["SWIFT"],
    "beneficiary_address": "{user's street address}",
    "beneficiary_country": "{user's country}",
    "beneficiary_entity_type": "Individual",
    "beneficiary_company_name": "N/A",
    "beneficiary_first_name": "{user's first name}",
    "beneficiary_last_name": "{user's last name}",
    "beneficiary_city": "{user's city}",
    "beneficiary_postcode": "{user's postal code}",
    "beneficiary_state_or_province": "{user's state or province}",
    "beneficiary_date_of_birth": "{user's date of birth}",
    "beneficiary_identification_type": "{user's document type}",
    "beneficiary_identification_value": "{user's document number}",
    "bank_country": "{user's bank country}",
    "bank_name": "{user's bank name}",
    "bank_account_type": "Checking",
    "currency": "{user's preferred currency}",
    "account_number": "{user's bank account number}",
    "routing_code_type_1": "ABA",
    "routing_code_value_1": "{user's bank routing number}",
    "bic_swift": "{user's bank SWIFT code}",
    "iban": "{user's IBAN if applicable}",
    "default_beneficiary": true,
    "creator_contact_id": "C78901",
    "bank_address": "{user's bank address}"
  }
  ```
- **Response Data**:
  ```json
  {
    "beneficiaryId": "B987654",
    "message": "Beneficiary created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Beneficiary already exists.

### Error Handling
If any step in this process fails (e.g., creating an account, contact, or beneficiary), appropriate error messages should be logged, and the process should either be retried or halted with an error response returned to the client. Proper rollback mechanisms should be in place to avoid partial setups.

---

## Logic 2: Investment Process

### Overview
When a user invests in a campaign, the following sequence of actions must occur:
1. **Create Transfer** from the user's wallet to the campaign's wallet.
2. **Create Investment** record associated with the user and the campaign.
3. **Update the User's Balance** to reflect the new available funds.
4. **Update the User's Wallet** to reflect the new balance, earnings, and bonuses.

### API Flow
1. **Investment request is initiated** by the user.
2. **Create Transfer** to move funds from the user's wallet to the campaign.
3. **Create Investment** record for the user in the campaign.
4. **Update User's Balance** to reflect the investment.
5. **Update User's Wallet** to finalize the investment process.

### Request and Response Data

#### Create Transfer
- **URL**: `/api/transfer/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "source_account_id": "{user's accountId}",
    "destination_account_id": "{campaign's accountId}",
    "currency": "{investment currency}",
    "amount": "{investment amount}",
    "status": "Completed",
    "reason": "Investment in campaign {campaignId}",
    "unique_request_id": "{unique transfer ID}"
  }
  ```
- **Response Data**:
  ```json
  {
    "transferId": "TXN123456",
    "message": "Transfer created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Transfer with the same unique request ID already exists.

#### Create Investment
- **URL**: `/api/investments/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "user_id": "{userId}",
    "campaign_id": "{campaignId}",
    "amount": "{investment amount}",
    "interestRate": "{campaign interest rate}",
    "remaining_interest": "{calculated remaining interest}",
    "invested_at": "{investment date}",
    "status": "Active"
  }
  ```
- **Response Data**:
  ```json
  {
    "investmentId": "INV123456",
    "message": "Investment created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Investment for the specified user and campaign already exists.

#### Update Balance
- **URL**: `/api/balance/update/{balanceId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "account_id": "{user's accountId}",
    "currency": "{investment currency}",
    "amount": "{new balance after investment}"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Balance updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Balance not found.

#### Update Wallet
- **URL**: `/api/wallet/update/{walletId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "your_reference": "{userId}",
    "balance": "{new balance after investment}",
    "earning": "{updated earnings}",
    "bonus": "{updated bonuses}",
    "is_for": "user"
  }
  ```
- **Response Data**:
  ```json


  {
    "message": "Wallet updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Wallet not found.

### Error Handling
If any part of this process fails (e.g., the transfer creation, investment recording, balance update, or wallet update), the entire transaction should be rolled back. This ensures that no partial investments are recorded and that the user's funds remain intact. Appropriate error messages should be returned to the client to indicate the failure.










### Setup example To handle everythin in one single api call




## Logic 1: Post-KYC Verification Account Setup

To handle all the steps in one API call, we can create a single endpoint that orchestrates the entire flow of updating the user's `kycVerified` status, creating an account, linking a contact, and creating a beneficiary. Below is an example implementation of such an API endpoint.

### API Endpoint: Complete KYC Verification and Setup

#### URL
`/api/user/completeKycSetup`

#### Method
`POST`

#### Description
This API endpoint handles the complete process of updating a user's `kycVerified` status and creating an associated account, contact, and beneficiary for the user.

#### Request Data
```json
{
  "userId": "12345",
  "userDetails": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phoneNumber": "+1234567890",
    "documentType": "Passport",
    "documentNumber": "A1234567",
    "dateOfBirth": "1980-01-01",
    "street": "5th Avenue",
    "city": "New York",
    "stateOrProvince": "NY",
    "country": "US",
    "postalCode": "10001",
    "locale": "en_US",
    "timezone": "America/New_York",
    "bankName": "Bank of America",
    "bankAccountNumber": "123456789",
    "bankRoutingNumber": "111000025",
    "bicSwift": "BOFAUS3NXXX",
    "iban": "N/A",
    "preferredCurrency": "USD"
  }
}
```

#### Response Data
```json
{
  "message": "KYC verification completed and account setup successfully",
  "accountId": "A123456",
  "contactId": "C78901",
  "beneficiaryId": "B987654"
}
```

#### Error Response
- `400 Bad Request`: Invalid input data.
- `404 Not Found`: User not found.
- `500 Internal Server Error`: Failed to complete the account setup due to server-side issues.

### Example Implementation (Pseudocode)

```python
@app.route('/api/user/completeKycSetup', methods=['POST'])
def complete_kyc_setup():
    data = request.json
    user_id = data['userId']
    user_details = data['userDetails']
    
    try:
        # Step 1: Update User KYC Verification Status
        update_kyc_status(user_id, kycVerified=True)
        
        # Step 2: Create Account
        account_data = {
            "account_name": f"{user_details['firstName']} {user_details['lastName']}",
            "legal_entity_type": "Individual",
            "street": user_details['street'],
            "city": user_details['city'],
            "country": user_details['country'],
            "postal_code": user_details['postalCode'],
            "brand": "User",
            "your_reference": user_id,
            "status": "Active",
            "state_or_province": user_details['stateOrProvince'],
            "spread_table": "Default",
            "api_trading": True,
            "online_trading": True,
            "phone_trading": False,
            "identification_type": user_details['documentType'],
            "identification_value": user_details['documentNumber'],
            "terms_and_conditions_accepted": True
        }
        account_response = create_account(account_data)
        account_id = account_response['accountId']
        
        # Step 3: Create Contact
        contact_data = {
            "login_id": user_id,
            "first_name": user_details['firstName'],
            "last_name": user_details['lastName'],
            "account_id": account_id,
            "account_name": f"{user_details['firstName']} {user_details['lastName']}",
            "status": "Active",
            "locale": user_details['locale'],
            "timezone": user_details['timezone'],
            "email_address": user_details['email'],
            "mobile_phone_number": user_details['phoneNumber'],
            "phone_number": user_details['phoneNumber'],
            "your_reference": user_id,
            "date_of_birth": user_details['dateOfBirth']
        }
        contact_response = create_contact(contact_data)
        contact_id = contact_response['contactId']
        
        # Step 4: Create Beneficiary
        beneficiary_data = {
            "bank_account_holder_name": f"{user_details['firstName']} {user_details['lastName']}",
            "name": f"{user_details['firstName']} {user_details['lastName']}",
            "email": user_details['email'],
            "payment_types": ["SWIFT"],
            "beneficiary_address": user_details['street'],
            "beneficiary_country": user_details['country'],
            "beneficiary_entity_type": "Individual",
            "beneficiary_company_name": "N/A",
            "beneficiary_first_name": user_details['firstName'],
            "beneficiary_last_name": user_details['lastName'],
            "beneficiary_city": user_details['city'],
            "beneficiary_postcode": user_details['postalCode'],
            "beneficiary_state_or_province": user_details['stateOrProvince'],
            "beneficiary_date_of_birth": user_details['dateOfBirth'],
            "beneficiary_identification_type": user_details['documentType'],
            "beneficiary_identification_value": user_details['documentNumber'],
            "bank_country": user_details['country'],
            "bank_name": user_details['bankName'],
            "bank_account_type": "Checking",
            "currency": user_details['preferredCurrency'],
            "account_number": user_details['bankAccountNumber'],
            "routing_code_type_1": "ABA",
            "routing_code_value_1": user_details['bankRoutingNumber'],
            "bic_swift": user_details['bicSwift'],
            "iban": user_details['iban'],
            "default_beneficiary": True,
            "creator_contact_id": contact_id,
            "bank_address": user_details['street']
        }
        beneficiary_response = create_beneficiary(beneficiary_data)
        beneficiary_id = beneficiary_response['beneficiaryId']
        
        # Return success response
        return jsonify({
            "message": "KYC verification completed and account setup successfully",
            "accountId": account_id,
            "contactId": contact_id,
            "beneficiaryId": beneficiary_id
        }), 200
    
    except Exception as e:
        # Handle errors and return error response
        return jsonify({"message": str(e)}), 500
```

### Summary

This API endpoint `/api/user/completeKycSetup` encapsulates the entire process of completing a user’s KYC verification and setting up their account, contact, and beneficiary information in a single API call. It provides a streamlined approach for the client to trigger this complex process with one request, handling all the necessary backend steps and dependencies internally.









## Logic 2: Investment Process

To handle all these steps in one API call, we can create a single endpoint that orchestrates the entire investment process, including creating a transfer, recording the investment, updating the user's balance, and updating the user's wallet.

### API Endpoint: Process Investment

#### URL
`/api/investment/process`

#### Method
`POST`

#### Description
This API endpoint handles the complete process of making an investment in a campaign, including creating a transfer, recording the investment, updating the user's balance, and updating the user's wallet.

#### Request Data
```json
{
  "userId": "12345",
  "campaignId": "98765",
  "investmentAmount": 10000,
  "currency": "USD"
}
```

#### Response Data
```json
{
  "message": "Investment processed successfully",
  "transferId": "TXN123456",
  "investmentId": "INV123456",
  "newBalance": 5000,
  "walletId": "WAL789012"
}
```

#### Error Response
- `400 Bad Request`: Invalid input data.
- `404 Not Found`: User or campaign not found.
- `500 Internal Server Error`: Failed to process the investment due to server-side issues.

### Example Implementation (Pseudocode)

```python
@app.route('/api/investment/process', methods=['POST'])
def process_investment():
    data = request.json
    user_id = data['userId']
    campaign_id = data['campaignId']
    investment_amount = data['investmentAmount']
    currency = data['currency']
    
    try:
        # Step 1: Validate user and campaign existence
        user = find_user_by_id(user_id)
        campaign = find_campaign_by_id(campaign_id)
        if not user or not campaign:
            return jsonify({"message": "User or campaign not found"}), 404
        
        # Step 2: Create Transfer
        transfer_data = {
            "source_account_id": user['accountId'],
            "destination_account_id": campaign['accountId'],
            "currency": currency,
            "amount": investment_amount,
            "status": "Completed",
            "reason": f"Investment in campaign {campaign_id}",
            "unique_request_id": generate_unique_request_id()
        }
        transfer_response = create_transfer(transfer_data)
        transfer_id = transfer_response['transferId']
        
        # Step 3: Create Investment
        investment_data = {
            "user_id": user_id,
            "campaign_id": campaign_id,
            "amount": investment_amount,
            "interestRate": campaign['interestRate'],
            "remaining_interest": calculate_remaining_interest(investment_amount, campaign['interestRate']),
            "invested_at": datetime.utcnow().isoformat(),
            "status": "Active"
        }
        investment_response = create_investment(investment_data)
        investment_id = investment_response['investmentId']
        
        # Step 4: Update Balance
        current_balance = get_balance(user['accountId'], currency)
        new_balance = current_balance - investment_amount
        update_balance_response = update_balance(user['balanceId'], new_balance)
        
        # Step 5: Update Wallet
        wallet_data = {
            "your_reference": user_id,
            "balance": new_balance,
            "earning": calculate_new_earnings(user['walletId'], investment_amount),
            "bonus": calculate_new_bonus(user['walletId'], investment_amount),
            "is_for": "user"
        }
        update_wallet_response = update_wallet(user['walletId'], wallet_data)
        
        # Return success response
        return jsonify({
            "message": "Investment processed successfully",
            "transferId": transfer_id,
            "investmentId": investment_id,
            "newBalance": new_balance,
            "walletId": user['walletId']
        }), 200
    
    except Exception as e:
        # Handle errors and return error response
        return jsonify({"message": str(e)}), 500
```

### Summary

This API endpoint `/api/investment/process` encapsulates the entire process of handling an investment in a campaign in a single API call. It coordinates the creation of a transfer, the recording of the investment, the updating of the user's balance, and the updating of the user's wallet. The process ensures that all related actions are carried out in sequence, and it provides a streamlined approach for the client to trigger the investment process with one request.