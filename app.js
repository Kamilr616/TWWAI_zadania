const express = require('express');
const config = require('./config');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (request, response) => {
    response.render(__dirname + '/index.html', {subject: 'Technologie webowe w aplikacjach Internetu'})});

app.get('/template/:variant/:a/:b', (request, res) => {
    const _variant = request.params.variant;
    const _a = parseFloat(request.params.a);
    const _b = parseFloat(request.params.b);
    let result = 0;

    switch (_variant) {
        case 'sum':
            result = _a + _b;
            break;
        case 'sub':
            result = _a - _b;
            break;
        case 'multiply':
            result = _a * _b;
            break;
        case 'divide':
            result = _a / _b;
            break;
        default:
            result = 'Invalid operation';
    }

    res.render('template', {subject: 'Technologie webowe w aplikacjach Internetu - Kalkulator', _variant, _a, _b, result });
});

app.listen(config.serverPort, function () {
    console.info(`Server is running at port ${config.serverPort} `);
});