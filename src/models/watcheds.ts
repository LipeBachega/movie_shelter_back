import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Watcheds extends Model {

}

Watcheds.init({}, { sequelize, modelName: "watched" })

Watcheds.sync()

export default Watcheds