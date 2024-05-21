-- Criação do banco de dados
CREATE DATABASE saep_db;
USE saep_db;

-- Criação da tabela Professor
CREATE TABLE Professor (
    id_professor INT identity(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

-- Criação da tabela Turma
CREATE TABLE Turma (
    id_turma INT identity(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor)
);

-- Criação da tabela Atividade
CREATE TABLE Atividade (
    id_atividade INT identity(1,1) PRIMARY KEY,
    descricao TEXT NOT NULL,
    data DATE NOT NULL,
    id_turma INT,
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma)
);

-- População da tabela Professor
INSERT INTO Professor (nome, email, senha) VALUES 
('Carla Mendes', 'carla.mendes@example.com', 'senhaJKL'),
('André Silva', 'andre.silva@example.com', 'senhaMNO'),
('Rita Ferreira', 'rita.ferreira@example.com', 'senhaPQR');

-- População da tabela Turma
INSERT INTO Turma (nome, id_professor) VALUES 
('Inglês 101', 1),
('Matemática 202', 2),
('Filosofia 303', 3);

-- População da tabela Atividade
INSERT INTO Atividade (descricao, data, id_turma) VALUES 
('Ensaios de Inglês', '2024-06-09', 1),
('Problemas de Cálculo', '2024-06-14', 2),
('Debate sobre Ética', '2024-06-18', 3);


