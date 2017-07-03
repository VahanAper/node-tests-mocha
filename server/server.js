const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page Not Found.',
    name: 'ToDo App v1.0',
  });
});

app.get('/users', (req, res) => {
  res.send([
    { name: 'Vahan', age: 30 },
    { name: 'Narek', age: 32 },
  ]);
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});

module.exports.app = app;
