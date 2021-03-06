'use strict'
require('dotenv').config
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const cors = require('cors')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const { db } = require('./config/index')

const app = express()
const isDev = db.dev

// Definiendo el schema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(cors())

app.use(
  '/api',
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev
  })
)

app.listen(db.dbPort, () => {
  console.log(`Server is listening at http://localhost:${db.dbPort}/api`)
})
