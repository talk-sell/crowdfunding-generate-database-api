# Crowdfunding Generate Database API

This API is responsible for generating the database schema for a crowdfunding platform.


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

This API includes models for `User` and `Project`.

- `User`: Represents the users of the crowdfunding platform.
- `Project`: Represents the crowdfunding projects.

## License

MIT License
