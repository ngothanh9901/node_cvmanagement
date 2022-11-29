module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD:"123456789",
    DB:"node_cv_management",
    dialect : "mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};