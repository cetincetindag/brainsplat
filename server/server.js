const express = require('express');
const { run } = require('./db/mongoClient');
const app = express();
const port = 3000;

app.get('/pingDatabase', async (req, res) => {
  try {
    const result = await run(); res.send(result);
  } catch (error) {
    res.status(500).send('Error connecting to MongoDB');
  }
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

