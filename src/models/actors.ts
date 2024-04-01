import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Actors extends Model {

}

Actors.init({}, { sequelize, modelName: "actor" })

Actors.sync()