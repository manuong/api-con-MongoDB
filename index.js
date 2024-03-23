require('dotenv').config();
const connectDB = require('./src/mongodb');
const server = require('./src/server');
const { PORT } = process.env;

connectDB
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server listen in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

