'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
  getCourses: async () => {
    let db
    let courses = []
    try {
      db = await connectDB()
      courses = await db.collection('cursos').find().toArray()
    } catch (error) {
      errorHandler(error)
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
      errorHandler(error)
    }
    return course
  },
  getPeople: async () => {
    let db
    let students = []
    try {
      db = await connectDB()
      students = await db.collection('estudiantes').find().toArray()
    } catch (error) {
      errorHandler(error)
    }
    return students
  },
  getPerson: async (root, { id }) => {
    let db
    let student
    try {
      db = await connectDB()
      student = await db.collection('estudiantes').findOne({ _id: ObjectID(id) })
    } catch (error) {
      errorHandler(error)
    }
    return student
  }
}
