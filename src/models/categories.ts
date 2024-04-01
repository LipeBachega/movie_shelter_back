import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Categories extends Model {

}

Categories.init({
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "category", timestamps: false })

Categories.sync()

export default Categories