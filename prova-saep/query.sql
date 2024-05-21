-- Criação do banco de dados
CREATE DATABASE saep_db;
USE saep_db;

-- Criação da tabela Professor
CREATE TABLE Professor (
    id_professor INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

-- Criação da tabela Turma
CREATE TABLE Turma (
    id_turma INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor)
);

-- Criação da tabela Atividade
CREATE TABLE Atividade (
    id_atividade INT IDENTITY(1,1) PRIMARY KEY,
    descricao TEXT NOT NULL,
    data DATE NOT NULL,
    id_turma INT,
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma)
);

-- População da tabela Professor
INSERT INTO Professor (nome, email, senha) VALUES 
('Diego Rocha', 'diego.rocha@example.com', 'senhaSTU'),
('Marcela Vieira', 'marcela.vieira@example.com', 'senhaVWX'),
('Renato Nunes', 'renato.nunes@example.com', 'senhaYZA');

-- População da tabela Turma
INSERT INTO Turma (nome, id_professor) VALUES 
('Educação Física 101', 1),
('Ciências 202', 2),
('Literatura 303', 3);

-- População da tabela Atividade
INSERT INTO Atividade (descricao, data, id_turma) VALUES 
('Aula de Voleibol', '2024-06-08', 1),
('Experimento sobre Fisiologia', '2024-06-11', 2),
('Análise de Poemas', '2024-06-19', 3);