import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class NewPasswords extends Model {

}

NewPasswords.init({
    new_passsword_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    new_passsword: {
        type: DataTypes.STRING,
        allowNull: false
    },

    new_passsword_email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    new_passsword_validation_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "new_passsword" })

NewPasswords.sync()

export default NewPasswords