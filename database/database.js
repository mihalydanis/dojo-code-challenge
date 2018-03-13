const monk = require('monk');
require('dotenv').config();

const db = monk(process.env.DB_URI, (err) => {
  if (err) {
    console.error(err);
  }
});

module.exports = db;
