# Database Setup and Migration Documentation

This README file provides instructions for setting up and managing the database for the Energy Consumption Tracker application.

## Database Initialization

To initialize the database, execute the SQL commands in the `migrations/init.sql` file. This will create the necessary tables for storing energy consumption data and user information.

### Command to Run Migration

```sql
-- Run the following command in your SQL client
SOURCE migrations/init.sql;
```

## Seeding the Database

To populate the database with initial data for testing purposes, execute the SQL commands in the `seeds/seed.sql` file.

### Command to Run Seed

```sql
-- Run the following command in your SQL client
SOURCE seeds/seed.sql;
```

## Database Structure

The database is designed to store the following types of data:

- User information
- Energy consumption records
- Predictive analysis results

## Maintenance

For any changes to the database schema, create a new migration file in the `migrations` directory and update the `seeds` as necessary.

## Additional Resources

Refer to the backend documentation for more details on how the database interacts with the application.