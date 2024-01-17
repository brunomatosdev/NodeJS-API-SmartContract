const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { ethers } = require("ethers");
require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const port = 3000;

// Habilita o middleware CORS
app.use(cors());

// Configure a conexão com o nó Ethereum usando a URL do Infura da variável de ambiente
const provider = new ethers.providers.JsonRpcProvider(
  process.env.INFURA_API_KEY
);

// Carregue o ABI do contrato a partir do arquivo JSON
const contratoABI = JSON.parse(fs.readFileSync("contrato_abi.json", "utf8"));

// Endereço do contrato Wrapped ETH (WETH)
const contratoEndereco = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

// Crie uma instância do contrato
const contrato = new ethers.Contract(contratoEndereco, contratoABI, provider);

// Defina um endpoint para obter o nome do contrato
app.get("/api/nome-do-contrato", async (req, res) => {
  try {
    const nomeDoContrato = await contrato.name();
    res.json({ nomeDoContrato });
  } catch (error) {
    console.error("Erro ao obter o nome do contrato:", error);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
});

// Defina um endpoint para obter o símbolo do contrato
app.get("/api/simbolo-do-contrato", async (req, res) => {
  try {
    const simboloDoContrato = await contrato.symbol();
    res.json({ simboloDoContrato });
  } catch (error) {
    console.error("Erro ao obter o símbolo do contrato:", error);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
});

// Defina um endpoint para obter o total de fornecimento do contrato
app.get("/api/total-de-fornecimento-do-contrato", async (req, res) => {
  try {
    const totalDeFornecimento = await contrato.totalSupply();
    res.json({ totalDeFornecimento });
  } catch (error) {
    console.error("Erro ao obter o total de fornecimento do contrato:", error);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
});

// Rota para servir o arquivo index.html
app.get("/", (req, res) => {
  const indexHtml = fs.readFileSync("index.html", "utf8");
  res.send(indexHtml);
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
