const mongoose = require('mongoose');
require("dotenv/config");

mongoose.connect(
    process.env.DB_Connection,
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     },
     () => {
       console.log("Connecting to database");
     }
   );
   
const db = mongoose.connection
module.exports = db;
   