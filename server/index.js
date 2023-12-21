const app = express();
const PORT = 3000;
const clientPath = path.resolve(__dirname, '../Final/client');
const express = require('express');
const path = require('path');


app.use(express.static(clientPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});