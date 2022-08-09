const Pool = require('pg').Pool
const pool = new Pool({
   user: "postgres",
   password: "postgres",
   // host: "localhost",
   host: "45.147.179.186",
   port: 5432,
   database: "deps_gbdd"
})

module.exports = pool