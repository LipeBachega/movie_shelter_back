import { DataType, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Directors extends Model {

}

Directors.init({}, { sequelize, modelName: "director" })

Directors.sync()