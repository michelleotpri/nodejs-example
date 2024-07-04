# Cryptocurrency Dashboard

A cryptocurrency dashboard application built with Node.js, Express, and EJS. The application displays real-time and historical data for various cryptocurrencies.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Display real-time prices of cryptocurrencies.
- View historical data and trends.
- Filter and sort cryptocurrencies.
- Detailed view of individual cryptocurrencies.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/michelleotpri/nodejs-example.git
    cd nodejs-example
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```


## Usage

1. Start the application:

    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`.

## Project Structure

```plaintext
nodejs-example/
├── public/
│   ├── css/
│   │   └── style.css
├── views/
│   ├── pages/
│   │   ├── home.ejs
│   │   └── cryptocurrency.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
├── .env
├── app.js
├── package.json
└── README.md
```


## Configuration
The application uses environment variables for configuration. Create a .env file in the root directory with the following variables:

`COINGECKO_API_URL`: The base URL for the CoinGecko API.
`JQUERY_API_URL`: The base URL for the JQUERY API.
`PORT`: The port number for the application.

## Dependencies
Node.js
Express
EJS
Axios
dotenv
open

## License
This project is licensed under the MIT License.
