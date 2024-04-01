import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class PendingUsers extends Model {

}

PendingUsers.init({
    pending_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    pending_user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    pending_user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    pending_user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    pending_user_validation_number: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { sequelize, modelName: "pending_user" })

PendingUsers.sync()