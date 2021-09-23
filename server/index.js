const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;
const STATIC_DIR = path.join(__dirname, '/../client/dist');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(STATIC_DIR));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));