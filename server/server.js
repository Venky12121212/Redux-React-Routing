const express = require('express');
const app = express();
const apiRouter = require('./router/apiRouter');
//for browser functionality
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 8000;


app.get('/', (request, response) => {
    response.send(`<h2>Welcoe to express server....</h2>`);
});

//for cors
app.use(cors());

//configure the router
app.use('/api', apiRouter);


app.listen(port, hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});