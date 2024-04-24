const pool = require('../../db');
const queries = require('./queries')

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}
const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}
const addStudent = (req, res) => {
    const { name, email, age, dod } = req.body

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length) {
            res.send("Email already exists")
        }

        pool.query(queries.addStudent, [name , email, age, dod], (error, results) => {
            if(error) throw error
            res.status(201).send("students created successfully")
        })
    })
 }
 const removeStudent = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound) {
        res.send("Students does exist in the database, could not remove")
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if(error) throw error
            res.status(200).send('student remove successfully')
        })
    })
 }
 const updateStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const {name} = req.body

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound) {
        res.send("Students does exist in the database, could not update")
        }

        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if(error) throw error
            res.status(200).send("updated succeffully")
        })
    })
 }
module.exports ={
    getStudents,
    getStudentsById,
    addStudent,
    removeStudent,
    updateStudent
}