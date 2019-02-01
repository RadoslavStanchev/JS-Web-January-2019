const express = require('express');
const initData = require('./data/index');
const WorkoutLogModel = require('./data/models/workout-log-model');


initData();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/workoutlog/create', (req, res) => {
    const newWorkoutLog = new WorkoutLogModel({
        name: 'Back and Biceps',
        date: new Date(),
        exercises: [
            {
                name: 'Pullups',
                reps: 10,
                sets: 3,
            }
        ]
    })

    newWorkoutLog.save();
    res.end('Successfully created workout log')
})

app.get('/workoutlog/:logId', (req,res) => {
    const logId = req.params.logId;
    const query = WorkoutLogModel.findById(logId)

    query.exec((err, result) =>{
        if (err) {
            throw err; 
        }
        res.send(result); 
    })
})
app.get('/workoutlog/create', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server started... at port ${port}`)
})