import { DataType, Model } from "sequelize";
import connect from "../dataBase/sequelize";

const sequelize = connect

class PendingUsers extends Model {

}

PendingUsers.init({}, { sequelize, modelName: "pending_user" })

PendingUsers.sync()