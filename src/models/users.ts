import { DataType, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Users extends Model {

}

Users.init({}, { sequelize, modelName: "user" })

Users.sync()