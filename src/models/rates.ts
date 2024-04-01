import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Rates extends Model {

}

Rates.init({}, { sequelize, modelName: "rate" })

Rates.sync()