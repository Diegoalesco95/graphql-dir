'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }

    const newCourse = Object.assign(defaults, input)
    let db
    let course
    try {
      db = await connectDB()
      course = await db.collection('cursos').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (error) {
      console.error(error)
    }
    return newCourse
  },
  createStudent: async (root, { input }) => {
    let db
    let student
    try {
      db = await connectDB()
      student = await db.collection('estudiantes').insertOne(input)
      input._id = student.insertedId
    } catch (error) {
      console.error(error)
    }
    return input
  },
  editCourse: async (root, { _id, input }) => {
    let db
    let course
    try {
      db = await connectDB()
      await db.collection('cursos').updateOne({ _id: ObjectID(_id) }, { $set: input })
      course = await db.collection('cursos').findOne({ _id: ObjectID(_id) })
    } catch (error) {
      console.error(error)
    }
    return course
  },
  editStudent: async (root, { _id, input }) => {
    let db
    let student
    try {
      db = await connectDB()
      await db.collection('estudiantes').updateOne({ _id: ObjectID(_id) }, { $set: input })
      student = await db.collection('estudiantes').findOne({ _id: ObjectID(_id) })
    } catch (error) {
      console.error(error)
    }
    return student
  },
  deleteCourse: async (root, { _id }) => {
    let db
    let course
    try {
      db = await connectDB()
      course = await db.collection('cursos').findOne({ _id: ObjectID(_id) })
      if (course) {
        course = await db.collection('cursos').deleteOne({ _id: ObjectID(_id) })
        return 'El curso fue eliminado correctamente'
      } else {
        return 'No se puede eliminar el curso porque no existe o el id ingresado es incorrecto'
      }
    } catch (error) {
      console.error(error)
    }
  },
  deleteStudent: async (root, { _id }) => {
    let db
    let student
    try {
      db = await connectDB()

      student = await db.collection('estudiantes').deleteOne({ _id: ObjectID(_id) })
      if (student) {
        student = await db.collection('estudiantes').deleteOne({ _id: ObjectID(_id) })
        return 'El estudiante fue eliminado correctamente'
      } else {
        return 'No se puede eliminar el estudiante porque no existe o el id ingresado es incorrecto'
      }
    } catch (error) {
      console.error(error)
    }
  },
  addPeople: async (root, { courseID, personID }) => {
    let db
    let course
    let person
    try {
      db = await connectDB()
      course = await db.collection('cursos').findOne({ _id: ObjectID(courseID) })
      person = await db.collection('estudiantes').findOne({ _id: ObjectID(personID) })
      if (!course || !person) throw new Error('La persona o el curso no existe')
      await db.collection('cursos').updateOne({ _id: ObjectID(courseID) }, { $addToSet: { people: ObjectID(personID) } })
    } catch (error) {
      console.error(error)
    }
    return course
  }
}
