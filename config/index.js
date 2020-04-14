require('dotenv').config()

const db = {
  dev: process.env.NODE_ENV !== 'production',
  dbUser: process.env.DB_USER,
  dbPasswd: process.env.DB_PASSWD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT || 3000,
  dbName: process.env.DB_NAME
}

module.exports = { db }
