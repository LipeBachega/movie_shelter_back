import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Users extends Model { }

Users.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { sequelize, modelName: "user" })

Users.sync()

export default Users