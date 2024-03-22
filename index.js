require('dotenv').config();
const server = require('./src/server');
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`server listen in http://localhost:${PORT}`);
});
