# Laravel Authentication app with Passport

This is a simple API built with Laravel Passport for user authentication.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Install Composer dependencies:

    ```bash
    composer install
    ```

3. Copy the `.env.example` file to `.env` and configure your environment variables, including your database connection and application key:

    ```bash
    cp .env.example .env
    ```

4. Generate the application key:

    ```bash
    php artisan key:generate
    ```

5. Run database migrations to create the necessary tables:

    ```bash
    php artisan migrate
    ```

6. Install Laravel Passport:

    ```bash
    php artisan passport:install
    ```

7. Start the development server:

    ```bash
    php artisan serve
    ```

8. You're ready to start using the API!

## API Endpoints

The following API endpoints are available:

- `POST /api/register`: Register a new user. Requires `first_name`, `last_name`, `email`, and `password` parameters.

- `POST /api/login`: Authenticate and obtain an access token. Requires `email` and `password` parameters.

- `POST /api/logout`: Log out and revoke the user's access token. Requires authentication.

- `GET /api/user`: Retrieve the authenticated user's details. Requires authentication.

- Rest endpoints are according to the guidelines provided.

## Authentication

This API uses Laravel Passport for authentication. When registering or logging in, the API returns an access token, which should be included in the `Authorization` header of subsequent requests to authenticate the user.

Example header:

- Authorization: Bearer <access-token>

