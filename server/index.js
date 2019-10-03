const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname + '/../dist')));

app.use('/', express.static(path.join(__dirname + '/../dist')));

app.listen(port, () => console.log(`App running on port ${port}`));
