import { DataTypes, Model } from "sequelize";
import { dbConnection } from "../config/connection"
import { Turma } from "./turma";

interface AtividadeAttributes {
    id_atividade: number;
    descricao: string;
    data: Date;
    id_turma: number;
}

class Atividade extends Model<AtividadeAttributes> implements AtividadeAttributes {
    public id_atividade!: number;
    public descricao!: string;
    public data!: Date;
    public id_turma!: number;
}

Atividade.init({
    id_atividade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_turma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Turma,
            key: 'id_turma'
        }
    }
}, {
    sequelize: dbConnection,
    tableName: 'Atividade'
});

export { Atividade }