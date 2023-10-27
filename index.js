const express = require('express');
const app = express();
const questions = require('./questions').questions;

app.get('/api/questions', (request, response) => {
    response.send(questions);
});

app.listen(3000, function () {
    console.info(`Server is running at port 3000`);
});
