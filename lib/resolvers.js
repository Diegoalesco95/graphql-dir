'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  Query: {
    getCourses: async () => {
      let db
      let courses = []
      try {
        db = await connectDB()
        courses = await db.collection('cursos').find().toArray()
      } catch (error) {
        console.error(error)
      }
      return courses
    },
    getCourse: async (root, { id }) => {
      let db
      let course
      try {
        db = await connectDB()
        course = await db.collection('cursos').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.error(error)
      }
      return course
    }
  }
}
