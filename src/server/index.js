const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');

const root = './dist';
const public = process.env.PUBLIC || `${root}`;
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(public));
console.log(`serving ${public}`);
app.get('*', (req, res) => {
  res.sendFile(req.url, { root: root });
});

const port = process.env.PORT || '80';
app.listen(port, () => console.log(`API running on localhost:${port}`));