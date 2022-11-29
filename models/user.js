module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define("user",{
        id:{
            type: Sequelize.BIGINT,
            autoIncrement: true, 
            primaryKey: true
        },
        email:{
            type:Sequelize.STRING 
        },
        username:{
            type:Sequelize.STRING 
        },
        password: {
            type:Sequelize.STRING 
        }
    });
};