const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname + '/../dist')));

app.use('/', express.static(path.join(__dirname + '/../dist')));
app.use('/about', express.static(path.join(__dirname + '/../dist')));
app.use('/music', express.static(path.join(__dirname + '/../dist')));

app.listen(port, () => console.log(`App running on port ${port}`));
