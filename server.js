require("dotenv").config({ path: "./.env" });

console.log("ENV CHECK:", process.env.MONGO_URI); // 👈 MUST print value

const app = require("./src/app");
const connectToDB = require("./src/config/db");

connectToDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});