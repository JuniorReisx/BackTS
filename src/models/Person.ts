import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../config/database";

// Interface para definir os atributos obrigatórios
interface PersonAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  phoneNumber: string;
}

// Interface para permitir criação de objetos sem ID (opcional na criação)
interface PersonCreationAttributes extends Optional<PersonAttributes, "id"> {}

// Classe que representa a tabela de usuários
class Person extends Model<PersonAttributes, PersonCreationAttributes> implements PersonAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public age!: number;
  public phoneNumber!: string;
}

// Inicialização do modelo
Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Garantir que o email seja único
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "users", // Nome da tabela no banco de dados
    timestamps: true,   // Adiciona campos createdAt e updatedAt automaticamente
  }
);

export default Person;
