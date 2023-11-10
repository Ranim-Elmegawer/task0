const mongoose = require('mongoose');
require('dotenv').config();

// console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err))

const Student = require('./models/student');
const Course = require('./models/course');

const student1 = new Student({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    courses: []
}).save().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

const student2 = new Student({
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '123-456-7890',
    courses: []
}).save().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

const course1 = new Course({
    name: 'Introduction to Programming',
    code: 'COMP1006',
    description: 'This is an introduction to programming',
    credits: 3,
    term: 'Fall',
    students: []
}).save().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

const course2 = new Course({
    name: 'Introduction to Databases',
    code: 'COMP1005',
    description: 'This is an introduction to databases',
    credits: 3,
    term: 'Fall',
    students: []
}).save().then(result => {
    console.log(result);
    console.log('Program has finished executing succesfully');
}).catch(err => {
    console.log(err);
});


console.log('Program is starting');