const express = require("express");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts")
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

const indexRoute = require("./src/routes/indexRoute");
const usersRoute = require("./src/routes/usersRoute");

const PORT = "3000";

app.use("/", indexRoute); 
app.use("/users", usersRoute); 

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})