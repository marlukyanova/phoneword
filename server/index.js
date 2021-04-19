const express = require('express');
const cors = require('cors');
const router = require('./router');

const PORT = 3000;

const app = express();
app.use(cors({ origin: '*' }));
app.use(router);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
