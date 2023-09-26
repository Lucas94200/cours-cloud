const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_mklx', // Database name
  'lya', // User
  'HXwR6FHmagdpO7XULb9IT0swr7JxqTCw', // Password
  {
    host: 'dpg-ck9d0eugtj9c73c4g260-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
