# Ethereum Smart Contract Interaction

This project demonstrates how to interact with an Ethereum smart contract using a simple Node.js backend and a basic HTML/JavaScript frontend. It includes functionalities to retrieve the contract's name, symbol, and total supply.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**
- **npm (Node Package Manager)**

## Getting Started

1. **Clone the repository:**

   git clone https://github.com/your-username/nodejs-api-smartcontract.git
   cd nodejs-api-smartcontract

   Install dependencies:

   ```

   ```

npm install

Set up your environment variables:

Create a .env file in the root of your project and add your Infura API key:

INFURA_API_KEY=your_infura_api_key

---

Running the Application

To start the application, run the following command:

    npm start

    This will start the server at http://localhost:3000.

Interacting with the Smart Contract

Open your web browser and go to http://localhost:3000 to access the web application. The application provides buttons to interact with the smart contract:

    "Obter Nome do Contrato": Fetches and displays the name of the smart contract.
    "Obter Símbolo do Contrato": Fetches and displays the symbol of the smart contract.
    "Obter Total de Fornecimento": Fetches and displays the total supply of the smart contract.

Troubleshooting

    If you encounter any issues, check the console for error messages.
    Make sure the Infura API key in the .env file is correct.

Project Structure

    connect.js: Node.js backend to handle Ethereum interactions.
    index.html: Basic HTML/JavaScript frontend for user interaction.
    contrato_abi.json: JSON file containing the ABI (Application Binary Interface) of the smart contract.

Ethereum Smart Contract

The smart contract used in this project is a Wrapped ETH (WETH) contract. Update the contrato_abi.json file with the ABI of your specific smart contract.
Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback is highly appreciated.
License

This project is licensed under the MIT License.

Please adjust the content based on your specific project details. The provided example assumes a basic structure and functionalities.

vbnet

Feel free to further customize the content as needed. If you have any more requests or questions, let me know!
