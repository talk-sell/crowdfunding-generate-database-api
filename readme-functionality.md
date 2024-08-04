Here is the `README-functionality.md` document that contains details of the API requests, including the URL, request data, response data, and response status in case of errors:

```markdown
# API Functionality Documentation

This document provides details of the API requests, including URLs, request data, response data, and error handling for different models in the system.

## User Endpoints

### Create User
- **URL**: `/api/user/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "picture": "http://example.com/picture.jpg",
    "phoneNumber": "+1234567890",
    "emailVerified": true,
    "kycVerified": false,
    "role": "User"
  }
  ```
- **Response Data**:
  ```json
  {
    "userId": "12345",
    "message": "User created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Email already exists.

### Update User
- **URL**: `/api/user/update/{userId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "picture": "http://example.com/picture.jpg",
    "phoneNumber": "+1234567890",
    "emailVerified": true,
    "kycVerified": false,
    "role": "User"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "User updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: User not found.

### Find User by ID
- **URL**: `/api/user/{userId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "userId": "12345",
    "email": "user@example.com",
    "name": "John Doe",
    "picture": "http://example.com/picture.jpg",
    "phoneNumber": "+1234567890",
    "emailVerified": true,
    "kycVerified": false,
    "role": "User"
  }
  ```
- **Error Response**:
  - `404 Not Found`: User not found.

### Find User by Email
- **URL**: `/api/user/findByEmail`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response Data**:
  ```json
  {
    "userId": "12345",
    "email": "user@example.com",
    "name": "John Doe",
    "picture": "http://example.com/picture.jpg",
    "phoneNumber": "+1234567890",
    "emailVerified": true,
    "kycVerified": false,
    "role": "User"
  }
  ```
- **Error Response**:
  - `404 Not Found`: User not found.

## UserIdentity Endpoints

### Create UserIdentity
- **URL**: `/api/userIdentity/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "userId": "12345",
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com",
    "phoneNumber": "+1234567890",
    "nationality": "US",
    "documentNumber": "A1234567",
    "documentType": "Passport",
    "country": "US",
    "city": "New York",
    "postalCode": "10001",
    "street": "5th Avenue",
    "number": "789",
    "addressOptional": "",
    "issueDate": "2020-01-01",
    "expirationDate": "2030-01-01",
    "countryOfIssue": "US"
  }
  ```
- **Response Data**:
  ```json
  {
    "identityId": "67890",
    "message": "UserIdentity created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: User identity already exists.

### Update UserIdentity
- **URL**: `/api/userIdentity/update/{identityId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com",
    "phoneNumber": "+1234567890",
    "nationality": "US",
    "documentNumber": "A1234567",
    "documentType": "Passport",
    "country": "US",
    "city": "New York",
    "postalCode": "10001",
    "street": "5th Avenue",
    "number": "789",
    "addressOptional": "",
    "issueDate": "2020-01-01",
    "expirationDate": "2030-01-01",
    "countryOfIssue": "US"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "UserIdentity updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: User identity not found.

### Find UserIdentity by ID
- **URL**: `/api/userIdentity/{identityId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "identityId": "67890",
    "userId": "12345",
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com",
    "phoneNumber": "+1234567890",
    "nationality": "US",
    "documentNumber": "A1234567",
    "documentType": "Passport",
    "country": "US",
    "city": "New York",
    "postalCode": "10001",
    "street": "5th Avenue",
    "number": "789",
    "addressOptional": "",
    "issueDate": "2020-01-01",
    "expirationDate": "2030-01-01",
    "countryOfIssue": "US"
  }
  ```
- **Error Response**:
  - `404 Not Found`: User identity not found.

### Find UserIdentity by UserID
- **URL**: `/api/userIdentity/findByUserId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "userId": "12345"
  }
  ```
- **Response Data**:
  ```json
  {
    "identityId": "67890",
    "userId": "12345",
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com",
    "phoneNumber": "+1234567890",
    "nationality": "US",
    "documentNumber": "A1234567",
    "documentType": "Passport",
    "country": "US",
    "city": "New York",
    "postalCode": "10001",
    "street": "5th Avenue",
    "number": "789",
    "addressOptional": "",
    "issueDate": "2020-01-01",
    "expirationDate": "2030-01-01",
    "countryOfIssue": "US"
  }
  ```
- **Error Response**:
  - `404 Not Found`: User identity not found.

## Project Endpoints

### Create Project
- **URL**: `/api/project/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "name": "New Project",
    "description": "Project description",
    "category": "Technology",
    "location": "New York, USA",
    "videoUrl": "http://example.com/video.mp4",
    "ProjectValue": 1000000,
    "numberOfInvestors": 100,
    "averageInterestRate": 5.0,
    "fundingProgress": 50,
    "status": "Active"
  }
  ```
- **Response Data**:
  ```json
  {
    "projectId": "54321",
    "message": "Project created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Project name already exists.

### Update Project
- **URL**: `/api/project/update/{projectId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "name": "Updated Project",
    "description": "Updated description",
    "category": "Technology",
    "location": "San Francisco, USA",
    "videoUrl": "http://example.com/video.mp4",
    "ProjectValue": 1500000,
    "numberOfInvestors": 200,
    "averageInterestRate": 4.5,
    "fundingProgress": 75,
    "status": "Completed"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Project updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Project

 not found.

### Find Project by ID
- **URL**: `/api/project/{projectId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "projectId": "54321",
    "name": "New Project",
    "description": "Project description",
    "category": "Technology",
    "location": "New York, USA",
    "videoUrl": "http://example.com/video.mp4",
    "ProjectValue": 1000000,
    "numberOfInvestors": 100,
    "averageInterestRate": 5.0,
    "fundingProgress": 50,
    "status": "Active"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Project not found.

### List Projects by Category
- **URL**: `/api/project/findByCategory`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "category": "Technology"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "projectId": "54321",
      "name": "New Project",
      "description": "Project description",
      "category": "Technology",
      "location": "New York, USA",
      "videoUrl": "http://example.com/video.mp4",
      "ProjectValue": 1000000,
      "numberOfInvestors": 100,
      "averageInterestRate": 5.0,
      "fundingProgress": 50,
      "status": "Active"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No projects found for the specified category.

### List Projects by Status
- **URL**: `/api/project/findByStatus`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "status": "Active"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "projectId": "54321",
      "name": "New Project",
      "description": "Project description",
      "category": "Technology",
      "location": "New York, USA",
      "videoUrl": "http://example.com/video.mp4",
      "ProjectValue": 1000000,
      "numberOfInvestors": 100,
      "averageInterestRate": 5.0,
      "fundingProgress": 50,
      "status": "Active"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No projects found for the specified status.

## Campaign Endpoints

### Create Campaign
- **URL**: `/api/campaign/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "projectId": "54321",
    "name": "New Campaign",
    "description": "Campaign description",
    "videoUrl": "http://example.com/video.mp4",
    "fundingStartDate": "2023-01-01",
    "fundingEndDate": "2023-12-31",
    "min_investment": 1000,
    "min_funding": 50000,
    "max_funding": 100000,
    "numberOfInvestors": 50,
    "interestRate": 5.0,
    "fundingProgress": 0,
    "status": "Open"
  }
  ```
- **Response Data**:
  ```json
  {
    "campaignId": "98765",
    "message": "Campaign created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Campaign name already exists.

### Update Campaign
- **URL**: `/api/campaign/update/{campaignId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "projectId": "54321",
    "name": "Updated Campaign",
    "description": "Updated campaign description",
    "videoUrl": "http://example.com/video.mp4",
    "fundingStartDate": "2023-01-01",
    "fundingEndDate": "2023-12-31",
    "min_investment": 1000,
    "min_funding": 50000,
    "max_funding": 100000,
    "numberOfInvestors": 50,
    "interestRate": 5.0,
    "fundingProgress": 50,
    "status": "Closed"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Campaign updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Campaign not found.

### Find Campaign by ID
- **URL**: `/api/campaign/{campaignId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "campaignId": "98765",
    "projectId": "54321",
    "name": "New Campaign",
    "description": "Campaign description",
    "videoUrl": "http://example.com/video.mp4",
    "fundingStartDate": "2023-01-01",
    "fundingEndDate": "2023-12-31",
    "min_investment": 1000,
    "min_funding": 50000,
    "max_funding": 100000,
    "numberOfInvestors": 50,
    "interestRate": 5.0,
    "fundingProgress": 0,
    "status": "Open"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Campaign not found.

### Find Campaigns by Project ID
- **URL**: `/api/campaign/findByProjectId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "projectId": "54321"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "campaignId": "98765",
      "projectId": "54321",
      "name": "New Campaign",
      "description": "Campaign description",
      "videoUrl": "http://example.com/video.mp4",
      "fundingStartDate": "2023-01-01",
      "fundingEndDate": "2023-12-31",
      "min_investment": 1000,
      "min_funding": 50000,
      "max_funding": 100000,
      "numberOfInvestors": 50,
      "interestRate": 5.0,
      "fundingProgress": 0,
      "status": "Open"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No campaigns found for the specified project.

### List Campaigns by Status
- **URL**: `/api/campaign/findByStatus`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "status": "Open"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "campaignId": "98765",
      "projectId": "54321",
      "name": "New Campaign",
      "description": "Campaign description",
      "videoUrl": "http://example.com/video.mp4",
      "fundingStartDate": "2023-01-01",
      "fundingEndDate": "2023-12-31",
      "min_investment": 1000,
      "min_funding": 50000,
      "max_funding": 100000,
      "numberOfInvestors": 50,
      "interestRate": 5.0,
      "fundingProgress": 0,
      "status": "Open"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No campaigns found for the specified status.

## CampaignGallery Endpoints

### Create CampaignGallery
- **URL**: `/api/campaignGallery/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "imageUrl": "http://example.com/image.jpg"
  }
  ```
- **Response Data**:
  ```json
  {
    "galleryId": "34567",
    "message": "CampaignGallery created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Gallery image already exists.

### Update CampaignGallery
- **URL**: `/api/campaignGallery/update/{galleryId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "imageUrl": "http://example.com/newimage.jpg"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "CampaignGallery updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Campaign gallery not found.

### Find CampaignGallery by ID
- **URL**: `/api/campaignGallery/{galleryId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "galleryId": "34567",
    "campaignId": "98765",
    "imageUrl": "http://example.com/image.jpg"
  }
  ```
- **

Error Response**:
  - `404 Not Found`: Campaign gallery not found.

### Find CampaignGallery by Campaign ID
- **URL**: `/api/campaignGallery/findByCampaignId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "galleryId": "34567",
      "campaignId": "98765",
      "imageUrl": "http://example.com/image.jpg"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No gallery images found for the specified campaign.

## CampaignDocument Endpoints

### Create CampaignDocument
- **URL**: `/api/campaignDocument/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "name": "Business Plan",
    "file": "base64-encoded-file-content",
    "approved": false,
    "message": "Initial submission"
  }
  ```
- **Response Data**:
  ```json
  {
    "documentId": "123456",
    "message": "CampaignDocument created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Document name already exists.

### Update CampaignDocument
- **URL**: `/api/campaignDocument/update/{documentId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "name": "Updated Business Plan",
    "file": "new-base64-encoded-file-content",
    "approved": true,
    "message": "Reviewed and approved"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "CampaignDocument updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Campaign document not found.

### Find CampaignDocument by ID
- **URL**: `/api/campaignDocument/{documentId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "documentId": "123456",
    "campaignId": "98765",
    "name": "Business Plan",
    "file": "base64-encoded-file-content",
    "approved": false,
    "message": "Initial submission"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Campaign document not found.

### Find CampaignDocuments by Campaign ID
- **URL**: `/api/campaignDocument/findByCampaignId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "documentId": "123456",
      "campaignId": "98765",
      "name": "Business Plan",
      "file": "base64-encoded-file-content",
      "approved": false,
      "message": "Initial submission"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No documents found for the specified campaign.

## CampaignReward Endpoints

### Create CampaignReward
- **URL**: `/api/campaignReward/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "tierName": "Gold",
    "minimumInvestment": 5000,
    "perks": "Exclusive access to project updates"
  }
  ```
- **Response Data**:
  ```json
  {
    "rewardId": "78901",
    "message": "CampaignReward created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Reward tier name already exists.

### Update CampaignReward
- **URL**: `/api/campaignReward/update/{rewardId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "tierName": "Platinum",
    "minimumInvestment": 10000,
    "perks": "Exclusive access to project updates and a VIP event invitation"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "CampaignReward updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Campaign reward not found.

### Find CampaignReward by ID
- **URL**: `/api/campaignReward/{rewardId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "rewardId": "78901",
    "campaignId": "98765",
    "tierName": "Gold",
    "minimumInvestment": 5000,
    "perks": "Exclusive access to project updates"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Campaign reward not found.

### Find CampaignRewards by Campaign ID
- **URL**: `/api/campaignReward/findByCampaignId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "rewardId": "78901",
      "campaignId": "98765",
      "tierName": "Gold",
      "minimumInvestment": 5000,
      "perks": "Exclusive access to project updates"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No rewards found for the specified campaign.

## CampaignSwotAnalysis Endpoints

### Create CampaignSwotAnalysis
- **URL**: `/api/campaignSwotAnalysis/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "category": "Strength",
    "description": "Strong project management team"
  }
  ```
- **Response Data**:
  ```json
  {
    "swotId": "234567",
    "message": "CampaignSwotAnalysis created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: SWOT analysis category already exists for this campaign.

### Update CampaignSwotAnalysis
- **URL**: `/api/campaignSwotAnalysis/update/{swotId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "category": "Opportunity",
    "description": "Growing market demand"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "CampaignSwotAnalysis updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Campaign SWOT analysis not found.

### Find CampaignSwotAnalysis by ID
- **URL**: `/api/campaignSwotAnalysis/{swotId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "swotId": "234567",
    "campaignId": "98765",
    "category": "Strength",
    "description": "Strong project management team"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Campaign SWOT analysis not found.

### Find CampaignSwotAnalysis by Campaign ID
- **URL**: `/api/campaignSwotAnalysis/findByCampaignId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "swotId": "234567",
      "campaignId": "98765",
      "category": "Strength",
      "description": "Strong project management team"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No SWOT analysis found for the specified campaign.

## CampaignFAQ Endpoints

### Create CampaignFAQ
- **URL**: `/api/campaignFAQ/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "question": "What is the minimum investment?",
    "answer": "The minimum investment is $1,000."
  }
  ```
- **Response Data**:
  ```json
  {
    "faqId": "456789",
    "message": "CampaignFAQ created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: FAQ question already exists for this campaign.

### Update CampaignFAQ
- **URL**: `/api/campaignFAQ/update/{faqId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "campaignId": "98765",
    "question": "What is the minimum investment?",
    "answer": "The minimum investment is $500."
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "CampaignFAQ updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid

 input data.
  - `404 Not Found`: Campaign FAQ not found.

### Find CampaignFAQ by ID
- **URL**: `/api/campaignFAQ/{faqId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "faqId": "456789",
    "campaignId": "98765",
    "question": "What is the minimum investment?",
    "answer": "The minimum investment is $1,000."
  }
  ```
- **Error Response**:
  - `404 Not Found`: Campaign FAQ not found.

### Find CampaignFAQs by Campaign ID
- **URL**: `/api/campaignFAQ/findByCampaignId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "campaignId": "98765"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "faqId": "456789",
      "campaignId": "98765",
      "question": "What is the minimum investment?",
      "answer": "The minimum investment is $1,000."
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No FAQs found for the specified campaign.

## Account Endpoints

### Create Account
- **URL**: `/api/account/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "account_name": "Acme Corp",
    "legal_entity_type": "Company",
    "street": "123 Main St",
    "city": "New York",
    "country": "US",
    "postal_code": "10001",
    "brand": "Acme",
    "your_reference": "REF123",
    "status": "Active",
    "state_or_province": "NY",
    "spread_table": "Default",
    "api_trading": true,
    "online_trading": true,
    "phone_trading": false,
    "identification_type": "Business Registration",
    "identification_value": "BR123456",
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
  - `409 Conflict`: Account name already exists.

### Update Account
- **URL**: `/api/account/update/{accountId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "account_name": "Acme Corp",
    "legal_entity_type": "Company",
    "street": "123 Main St",
    "city": "New York",
    "country": "US",
    "postal_code": "10001",
    "brand": "Acme",
    "your_reference": "REF123",
    "status": "Active",
    "state_or_province": "NY",
    "spread_table": "Default",
    "api_trading": true,
    "online_trading": true,
    "phone_trading": false,
    "identification_type": "Business Registration",
    "identification_value": "BR123456",
    "terms_and_conditions_accepted": true
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Account updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Account not found.

### Find Account by ID
- **URL**: `/api/account/{accountId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "accountId": "A123456",
    "account_name": "Acme Corp",
    "legal_entity_type": "Company",
    "street": "123 Main St",
    "city": "New York",
    "country": "US",
    "postal_code": "10001",
    "brand": "Acme",
    "your_reference": "REF123",
    "status": "Active",
    "state_or_province": "NY",
    "spread_table": "Default",
    "api_trading": true,
    "online_trading": true,
    "phone_trading": false,
    "identification_type": "Business Registration",
    "identification_value": "BR123456",
    "terms_and_conditions_accepted": true
  }
  ```
- **Error Response**:
  - `404 Not Found`: Account not found.

### Find Account by Reference
- **URL**: `/api/account/findByReference`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "your_reference": "REF123"
  }
  ```
- **Response Data**:
  ```json
  {
    "accountId": "A123456",
    "account_name": "Acme Corp",
    "legal_entity_type": "Company",
    "street": "123 Main St",
    "city": "New York",
    "country": "US",
    "postal_code": "10001",
    "brand": "Acme",
    "your_reference": "REF123",
    "status": "Active",
    "state_or_province": "NY",
    "spread_table": "Default",
    "api_trading": true,
    "online_trading": true,
    "phone_trading": false,
    "identification_type": "Business Registration",
    "identification_value": "BR123456",
    "terms_and_conditions_accepted": true
  }
  ```
- **Error Response**:
  - `404 Not Found`: Account not found with the specified reference.

## Contact Endpoints

### Create Contact
- **URL**: `/api/contact/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "login_id": "jdoe",
    "first_name": "John",
    "last_name": "Doe",
    "account_id": "A123456",
    "account_name": "Acme Corp",
    "status": "Active",
    "locale": "en_US",
    "timezone": "America/New_York",
    "email_address": "jdoe@example.com",
    "mobile_phone_number": "+1234567890",
    "phone_number": "+0987654321",
    "your_reference": "CREF123",
    "date_of_birth": "1980-01-01"
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
  - `409 Conflict`: Contact with the same login ID already exists.

### Update Contact
- **URL**: `/api/contact/update/{contactId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "login_id": "jdoe",
    "first_name": "John",
    "last_name": "Doe",
    "account_id": "A123456",
    "account_name": "Acme Corp",
    "status": "Active",
    "locale": "en_US",
    "timezone": "America/New_York",
    "email_address": "jdoe@example.com",
    "mobile_phone_number": "+1234567890",
    "phone_number": "+0987654321",
    "your_reference": "CREF123",
    "date_of_birth": "1980-01-01"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Contact updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Contact not found.

### Find Contact by ID
- **URL**: `/api/contact/{contactId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "contactId": "C78901",
    "login_id": "jdoe",
    "first_name": "John",
    "last_name": "Doe",
    "account_id": "A123456",
    "account_name": "Acme Corp",
    "status": "Active",
    "locale": "en_US",
    "timezone": "America/New_York",
    "email_address": "jdoe@example.com",
    "mobile_phone_number": "+1234567890",
    "phone_number": "+0987654321",
    "your_reference": "CREF123",
    "date_of_birth": "1980-01-01"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Contact not found.

### Find Contact by Reference
- **URL**: `/api/contact/findByReference`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "your_reference": "CREF123"
  }
  ```
- **Response Data**:
  ```json
  {
    "contactId": "C78901",
    "login_id": "jdoe",
    "first_name": "John",
    "last_name": "Doe",
    "account_id": "A123456",
    "account_name": "Acme Corp",
    "status": "Active",
    "locale": "en_US",
    "timezone": "America/New_York",
    "email_address": "jdoe@example.com",
    "

mobile_phone_number": "+1234567890",
    "phone_number": "+0987654321",
    "your_reference": "CREF123",
    "date_of_birth": "1980-01-01"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Contact not found with the specified reference.

## Beneficiary Endpoints

### Create Beneficiary
- **URL**: `/api/beneficiary/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "bank_account_holder_name": "Jane Smith",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "payment_types": ["SWIFT"],
    "beneficiary_address": "456 Market St",
    "beneficiary_country": "US",
    "beneficiary_entity_type": "Individual",
    "beneficiary_company_name": "N/A",
    "beneficiary_first_name": "Jane",
    "beneficiary_last_name": "Smith",
    "beneficiary_city": "San Francisco",
    "beneficiary_postcode": "94103",
    "beneficiary_state_or_province": "CA",
    "beneficiary_date_of_birth": "1990-05-15",
    "beneficiary_identification_type": "Passport",
    "beneficiary_identification_value": "P9876543",
    "bank_country": "US",
    "bank_name": "Bank of America",
    "bank_account_type": "Checking",
    "currency": "USD",
    "account_number": "123456789",
    "routing_code_type_1": "ABA",
    "routing_code_value_1": "111000025",
    "routing_code_type_2": "N/A",
    "routing_code_value_2": "N/A",
    "bic_swift": "BOFAUS3NXXX",
    "iban": "N/A",
    "default_beneficiary": true,
    "creator_contact_id": "C78901",
    "bank_address": "123 Main St"
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

### Update Beneficiary
- **URL**: `/api/beneficiary/update/{beneficiaryId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "bank_account_holder_name": "Jane Smith",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "payment_types": ["SWIFT"],
    "beneficiary_address": "456 Market St",
    "beneficiary_country": "US",
    "beneficiary_entity_type": "Individual",
    "beneficiary_company_name": "N/A",
    "beneficiary_first_name": "Jane",
    "beneficiary_last_name": "Smith",
    "beneficiary_city": "San Francisco",
    "beneficiary_postcode": "94103",
    "beneficiary_state_or_province": "CA",
    "beneficiary_date_of_birth": "1990-05-15",
    "beneficiary_identification_type": "Passport",
    "beneficiary_identification_value": "P9876543",
    "bank_country": "US",
    "bank_name": "Bank of America",
    "bank_account_type": "Checking",
    "currency": "USD",
    "account_number": "123456789",
    "routing_code_type_1": "ABA",
    "routing_code_value_1": "111000025",
    "routing_code_type_2": "N/A",
    "routing_code_value_2": "N/A",
    "bic_swift": "BOFAUS3NXXX",
    "iban": "N/A",
    "default_beneficiary": true,
    "creator_contact_id": "C78901",
    "bank_address": "123 Main St"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Beneficiary updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Beneficiary not found.

### Find Beneficiary by ID
- **URL**: `/api/beneficiary/{beneficiaryId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "beneficiaryId": "B987654",
    "bank_account_holder_name": "Jane Smith",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "payment_types": ["SWIFT"],
    "beneficiary_address": "456 Market St",
    "beneficiary_country": "US",
    "beneficiary_entity_type": "Individual",
    "beneficiary_company_name": "N/A",
    "beneficiary_first_name": "Jane",
    "beneficiary_last_name": "Smith",
    "beneficiary_city": "San Francisco",
    "beneficiary_postcode": "94103",
    "beneficiary_state_or_province": "CA",
    "beneficiary_date_of_birth": "1990-05-15",
    "beneficiary_identification_type": "Passport",
    "beneficiary_identification_value": "P9876543",
    "bank_country": "US",
    "bank_name": "Bank of America",
    "bank_account_type": "Checking",
    "currency": "USD",
    "account_number": "123456789",
    "routing_code_type_1": "ABA",
    "routing_code_value_1": "111000025",
    "routing_code_type_2": "N/A",
    "routing_code_value_2": "N/A",
    "bic_swift": "BOFAUS3NXXX",
    "iban": "N/A",
    "default_beneficiary": true,
    "creator_contact_id": "C78901",
    "bank_address": "123 Main St"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Beneficiary not found.

## Balance Endpoints

### Create Balance
- **URL**: `/api/balance/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "account_id": "A123456",
    "currency": "USD",
    "amount": 10000
  }
  ```
- **Response Data**:
  ```json
  {
    "balanceId": "BAL123456",
    "message": "Balance created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Balance for the specified account and currency already exists.

### Update Balance
- **URL**: `/api/balance/update/{balanceId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "account_id": "A123456",
    "currency": "USD",
    "amount": 20000
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

### Find Balance by ID
- **URL**: `/api/balance/{balanceId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "balanceId": "BAL123456",
    "account_id": "A123456",
    "currency": "USD",
    "amount": 20000
  }
  ```
- **Error Response**:
  - `404 Not Found`: Balance not found.

## Transfer Endpoints

### Create Transfer
- **URL**: `/api/transfer/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "source_account_id": "A123456",
    "destination_account_id": "A654321",
    "currency": "USD",
    "amount": 5000,
    "status": "Pending",
    "reason": "Invoice Payment",
    "unique_request_id": "TXN1234567890"
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

### Update Transfer
- **URL**: `/api/transfer/update/{transferId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "source_account_id": "A123456",
    "destination_account_id": "A654321",
    "currency": "USD",
    "amount": 5000,
    "status": "Completed",
    "reason": "Invoice Payment",
    "unique_request_id": "TXN1234567890"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Transfer updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Transfer not found.

### Find Transfer by ID
- **URL**: `/api/transfer/{transferId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "transfer

Id": "TXN123456",
    "source_account_id": "A123456",
    "destination_account_id": "A654321",
    "currency": "USD",
    "amount": 5000,
    "status": "Completed",
    "reason": "Invoice Payment",
    "unique_request_id": "TXN1234567890"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Transfer not found.

## Wallet Endpoints

### Create Wallet
- **URL**: `/api/wallet/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "your_reference": "WAL123456",
    "balance": 5000,
    "earning": 0,
    "bonus": 0,
    "is_for": "user"
  }
  ```
- **Response Data**:
  ```json
  {
    "walletId": "WAL789012",
    "message": "Wallet created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Wallet with the same reference already exists.

### Update Wallet
- **URL**: `/api/wallet/update/{walletId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "your_reference": "WAL123456",
    "balance": 10000,
    "earning": 0,
    "bonus": 0,
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

### Find Wallet by ID
- **URL**: `/api/wallet/{walletId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "walletId": "WAL789012",
    "your_reference": "WAL123456",
    "balance": 10000,
    "earning": 0,
    "bonus": 0,
    "is_for": "user"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Wallet not found.

### Find Wallet by Reference
- **URL**: `/api/wallet/findByReference`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "your_reference": "WAL123456"
  }
  ```
- **Response Data**:
  ```json
  {
    "walletId": "WAL789012",
    "your_reference": "WAL123456",
    "balance": 10000,
    "earning": 0,
    "bonus": 0,
    "is_for": "user"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Wallet not found with the specified reference.

## Investments Endpoints

### Create Investment
- **URL**: `/api/investments/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "user_id": "12345",
    "campaign_id": "98765",
    "amount": 10000,
    "interestRate": 5.0,
    "remaining_interest": 500,
    "invested_at": "2023-08-01",
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

### Update Investment
- **URL**: `/api/investments/update/{investmentId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "user_id": "12345",
    "campaign_id": "98765",
    "amount": 15000,
    "interestRate": 4.5,
    "remaining_interest": 1000,
    "invested_at": "2023-08-01",
    "status": "Completed"
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "Investment updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Investment not found.

### Find Investment by ID
- **URL**: `/api/investments/{investmentId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "investmentId": "INV123456",
    "user_id": "12345",
    "campaign_id": "98765",
    "amount": 15000,
    "interestRate": 4.5,
    "remaining_interest": 1000,
    "invested_at": "2023-08-01",
    "status": "Completed"
  }
  ```
- **Error Response**:
  - `404 Not Found`: Investment not found.

### Find Investments by User ID
- **URL**: `/api/investments/findByUserId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "user_id": "12345"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "investmentId": "INV123456",
      "user_id": "12345",
      "campaign_id": "98765",
      "amount": 15000,
      "interestRate": 4.5,
      "remaining_interest": 1000,
      "invested_at": "2023-08-01",
      "status": "Completed"
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No investments found for the specified user.

## InterestPayment Endpoints

### Create InterestPayment
- **URL**: `/api/interestPayment/create`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "investmentId": "INV123456",
    "paymentDate": "2023-09-01",
    "amount": 500,
    "mainInvestmentReceived": false,
    "remainingInterest": 1000
  }
  ```
- **Response Data**:
  ```json
  {
    "paymentId": "IP123456",
    "message": "InterestPayment created successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `409 Conflict`: Interest payment for the specified investment already exists.

### Update InterestPayment
- **URL**: `/api/interestPayment/update/{paymentId}`
- **Method**: `PUT`
- **Request Data**:
  ```json
  {
    "investmentId": "INV123456",
    "paymentDate": "2023-09-01",
    "amount": 500,
    "mainInvestmentReceived": true,
    "remainingInterest": 500
  }
  ```
- **Response Data**:
  ```json
  {
    "message": "InterestPayment updated successfully"
  }
  ```
- **Error Response**:
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Interest payment not found.

### Find InterestPayment by ID
- **URL**: `/api/interestPayment/{paymentId}`
- **Method**: `GET`
- **Response Data**:
  ```json
  {
    "paymentId": "IP123456",
    "investmentId": "INV123456",
    "paymentDate": "2023-09-01",
    "amount": 500,
    "mainInvestmentReceived": true,
    "remainingInterest": 500
  }
  ```
- **Error Response**:
  - `404 Not Found`: Interest payment not found.

### Find InterestPayments by Investment ID
- **URL**: `/api/interestPayment/findByInvestmentId`
- **Method**: `POST`
- **Request Data**:
  ```json
  {
    "investmentId": "INV123456"
  }
  ```
- **Response Data**:
  ```json
  [
    {
      "paymentId": "IP123456",
      "investmentId": "INV123456",
      "paymentDate": "2023-09-01",
      "amount": 500,
      "mainInvestmentReceived": true,
      "remainingInterest": 500
    },
    ...
  ]
  ```
- **Error Response**:
  - `404 Not Found`: No interest payments found for the specified investment.

---

This document outlines the basic structure and expected responses for each endpoint. Additional error responses may apply depending on the implementation specifics.
```

This `README-functionality.md` file provides a comprehensive guide for developers to understand how to interact with the API, what data to send and expect in return, and how to handle potential errors.