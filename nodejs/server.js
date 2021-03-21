
const app = require('express')();
const port = '5555';
const hostname = '0.0.0.0'

app.get('/staj', (req, res) => {
    res.send('Hello World from Node.JS!\n')
})

app.listen(5555, '0.0.0.0')