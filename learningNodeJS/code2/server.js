const express = require('express');
const Joi = require('joi'); // Input Validating Package

const app = express(); // creating ex application

app.use(express.json()); // enabling to parse json in a body

const logger = (req, reds, next) => {
    console.log(`${new Date().toString()} - ${req.method}, ${req.path}\n`);
    next();
}

app.use(logger); 

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
    {id: 4, name: "course4"}
]

app.get('/', (req, res) => {
    res.send("Hello World"); // this is the backend
});

app.get('/api/courses', (req, res) => {
    res.send(courses); // this is the backend
}); 

app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body); 
    if(error) {
        res.status(400).send(error.details[0].message);
        return ;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };

    courses.push(course);

    res.send(course);
})


// Updating the course

app.put('/api/courses/:id', (req, res) => {
    // Look up the course with given ID
    // If not exist return 404
    const course = courses.find(item => item.id === parseInt(req.params.id));
    if (!course) throw res.status(404).send("The course with the given ID was not found");

    // Validate the course
    // If invalid, return 400 - Bad Request
    const { error } = validateCourse(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
        return ;
    }

    // Update the course 
    course.name = req.body.name;

    // Return the updated course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
    }

    return Joi.validate(course, schema);
}


app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(item => item.id === parseInt(req.params.id));
    // console.log(course);
    if (!course) throw res.status(404).send("The course with the given ID was not found");
    res.send(course);
});

//  // We can also have two params
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// We can also have queries i.e comes after "?"
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });

 app.listen(3000);