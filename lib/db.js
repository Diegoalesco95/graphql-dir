'use strict'
const { MongoClient } = require('mongodb')

const { db } = require('../config/index')
const USER = encodeURIComponent(db.dbUser)
const PASSWORD = encodeURIComponent(db.dbPasswd)
const DB_NAME = db.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${db.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

let connection
async function connectDB() {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection = client.db(DB_NAME)
    console.log('Connected success to mongo')
  } catch (error) {
    console.error('Could not connect to db', error)
    process.exit(1)
  }
  return connection
}

module.exports = connectDB
