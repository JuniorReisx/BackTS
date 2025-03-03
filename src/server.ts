import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database";  // Caminho correto para o arquivo de conexão
import personRouter from "./routes/user.routes";  // Ajuste o caminho para o arquivo de rotas

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", personRouter);

const startServer = async () => {
  await connectDB(); // Conecta ao banco de dados
  const PORT = process.env.PORT || 5000; // Usa a variável de ambiente ou 5000 como padrão
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
};

startServer();
