import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class MovieCategories extends Model {

}

MovieCategories.init({}, { sequelize, modelName: "movie_category" })

MovieCategories.sync()

export default MovieCategories