const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    code: String,
    description: String,
    credits: Number,
    term: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;