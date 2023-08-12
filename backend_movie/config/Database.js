import { Sequelize} from "sequelize";

 const db = new Sequelize('backend-movie','root','',{
    host:"localhost",
    dialect: "mysql"
 });
 export default db;