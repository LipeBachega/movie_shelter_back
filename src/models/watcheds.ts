import { DataType, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class watcheds extends Model {

}

watcheds.init({}, { sequelize, modelName: "watched" })

watcheds.sync()