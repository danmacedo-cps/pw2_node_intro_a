const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ideias_db', 'danilomacedo', '*Psn9000', {
    host: 'dadosappideiasmacedo.mysql.database.azure.com',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Connectado ao servidor Azure MySQL!')
}catch(error){
    console.error(`Error MySQL: ${error}`)
}

module.exports = sequelize