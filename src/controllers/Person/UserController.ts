import { Request, Response } from "express";
import Person from "../../models/Person";

// Função para criar uma nova pessoa
export const createPerson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password, age, phoneNumber } = req.body;
    const person = await Person.create({ name, email, password, age, phoneNumber });
    return res.status(201).json(person);
  } catch (error) {
    console.error("Erro ao criar pessoa:", error);
    return res.status(500).json({
      message: "Erro ao criar pessoa",
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
};

// Função para listar todas as pessoas
export const getPeople = async (req: Request, res: Response): Promise<Response> => {
  try {
    const people = await Person.findAll();
    return res.status(200).json(people);
  } catch (error) {
    console.error("Erro ao obter pessoas:", error);
    return res.status(500).json({
      message: "Erro ao buscar pessoas",
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
};

// Função para buscar uma pessoa por ID
export const getPersonById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    return res.status(200).json(person);
  } catch (error) {
    console.error("Erro ao buscar pessoa:", error);
    return res.status(500).json({
      message: "Erro ao buscar pessoa",
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
};

// Função para atualizar uma pessoa
export const updatePerson = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { name, email, password, age, phoneNumber } = req.body;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    person.name = name;
    person.email = email;
    person.password = password;
    person.age = age;
    person.phoneNumber = phoneNumber;

    await person.save();
    return res.status(200).json(person);
  } catch (error) {
    console.error("Erro ao atualizar pessoa:", error);
    return res.status(500).json({
      message: "Erro ao atualizar pessoa",
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
};

// Função para deletar uma pessoa
export const deletePerson = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    await person.destroy();
    return res.status(200).json({ message: "Pessoa deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar pessoa:", error);
    return res.status(500).json({
      message: "Erro ao deletar pessoa",
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
};
