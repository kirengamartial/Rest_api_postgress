const getStudents = "SELECT * FROM students"
const getStudentsById = "SELECT * FROM students WHERE id = $1"
// s is alias
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1"
const addStudent = "INSERT INTO students(name, email, age, dod) VALUES($1, $2, $3, $4)"
const removeStudent = "DELETE FROM students WHERE id = $1"
const updateStudent = "UPDATE students SET name = $1 WHERE id= $2"


module.exports ={
    getStudents,
    getStudentsById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent
}