const express = require('express');
const serverPort = require('./config').serverPort;
const app = express();

let chart1 = {"type":"line","data":{"labels":["January","February","March","April","May","June"],"datasets":[{"label":"My First dataset","backgroundColor":"rgb(255, 99, 132)","borderColor":"rgb(255, 99, 132)","data":[0,10,5,2,20,30,45]}]},"options":{}};

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (request, response) => {
    response.render(__dirname + '/index.html', {subject: 'Technologie webowe w aplikacjach Internetu', chart1: JSON.stringify(chart1)})
});




app.listen(serverPort, function () {
    console.info(`Server is running at port ${serverPort} `);
});

