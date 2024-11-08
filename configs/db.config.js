const{Sequelize} = require("@sequelize/core");
const sequelize = new Sequelize({
    dialect:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"nodejs"
});

sequelize.authenticate().then(async()=>{
   await sequelize.sync({alter:true});
console.log("connected to mysql");
}).catch(err=>{
    console.log("cannot to mysql , error:" , err?.message);
});

module.exports = {
    sequelize
}