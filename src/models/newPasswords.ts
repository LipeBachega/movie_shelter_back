import { DataType, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class NewPasswords extends Model {

}

NewPasswords.init({}, { sequelize, modelName: "new_passsword" })

NewPasswords.sync()