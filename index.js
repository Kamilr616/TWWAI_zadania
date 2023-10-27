const express = require('express');
const app = express();
const questions = require('./questions').questions;
const serverPort = require('./config').serverPort;

app.use(express.json());

app.listen(serverPort, function () {
    console.info(`Server is running at port ` + serverPort);
});

app.route('/api/questions')
    .get((request, response) => {
        response.json(questions);
    })
    .post((request, response) => {
        const newQuestion = request.body; // JSON
        questions.push(newQuestion);
        response.status(201).json(newQuestion);
        console.log("New question: " + newQuestion)
    });

app.get('/api/questions/:id', (request, response) => {
    const questionId = parseInt(request.params.id);

    if (Number.isInteger(questionId) && questionId >= 0 && questionId < questions.length) {
        response.json(questions[questionId]);
    } else {
        response.status(404).json({ error: 'Question ' + questionId + ' not found!' });
    }
});