const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;