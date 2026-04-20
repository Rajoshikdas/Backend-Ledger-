const mongoose = require("mongoose");



function connectToDB() {

   mongoose.connect(process.env.MONGO_URI)
       .then(() => {
            console.log("server is connected to DB")
       })
       .catch(err => {
            console.error("Error connection to DB:")
            console.error("DB Error:", err.message);
       })


};

module.exports = connectToDB