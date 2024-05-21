import { DataTypes, Model } from "sequelize";
import { dbConnection } from "../config/connection"

interface TurmaAttributes {
    id_turma: number;
    id_professor: number;
    nome: string,
}

class Turma extends Model<TurmaAttributes> implements TurmaAttributes {
    public id_turma: number = 0;
    public id_professor: number = 0;
    public nome: string = "";
}

Turma.init(
    {
    id_turma: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
    id_professor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
      sequelize: dbConnection,
      tableName: 'Turma ' // Nome da tabela no banco de dados
    }
  );
  
  export { Turma };