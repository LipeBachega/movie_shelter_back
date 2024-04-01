import { DataType, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Categories extends Model {

}

Categories.init({}, { sequelize, modelName: "category" })

Categories.sync()