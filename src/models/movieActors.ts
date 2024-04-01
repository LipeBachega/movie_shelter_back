import { DataTypes, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class MovieActors extends Model {

}

MovieActors.init({}, { sequelize, modelName: "movie_actors" })

MovieActors.sync()

export default MovieActors