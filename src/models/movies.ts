import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class Movies extends Model {

}

Movies.init({}, { sequelize, modelName: "movie" })

Movies.sync()

export default Movies