import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

// Carregar as variáveis de ambiente
dotenv.config();

// Configuração do Sequelize com a URL do banco de dados do Supabase
export const database = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // O Supabase exige SSL
      rejectUnauthorized: false, // Para evitar erros de certificação
    },
  },
  models: [__dirname + "/../models/*.ts"], // Carrega todos os modelos do diretório
  logging: false, // Desativa logs SQL (opcional, pode ser útil durante o desenvolvimento)
});

// Função para conectar ao banco
export const connectDB = async () => {
  try {
    await database.authenticate(); // Testa a conexão
    console.log("📦 Conexão com o Supabase estabelecida!");

    await database.sync({ logging: false }); // Sincroniza os modelos com o banco de dados
    console.log("🔄 Modelos sincronizados com o banco de dados.");
  } catch (error) {
    console.error("❌ Erro ao conectar no Supabase:", error);
    process.exit(1); // Encerra o processo se não conseguir conectar ao banco
  }
};
