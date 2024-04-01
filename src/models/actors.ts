import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Actors extends Model {

}

Actors.init({
    actor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    actor_name: {
        type: DataTypes.STRING,
        allowNull: false
    }


}, { sequelize, modelName: "actor", timestamps: false })

Actors.sync()

export default Actors