import { DataTypes, Model } from "sequelize";
import { dbConnection } from "../config/connection"

interface ProfessorAttributes {
    id_professor: number;
    nome: string,
    email: string,
    senha: string
}

class Professor extends Model<ProfessorAttributes> implements ProfessorAttributes {
    public id_professor: number = 0;
    public nome: string = "";
    public email: string = "";
    public senha: string = "";
}

Professor.init(
    {
      id_professor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize: dbConnection,
      tableName: 'Professor' // Nome da tabela no banco de dados
    }
  );
  
  export { Professor };