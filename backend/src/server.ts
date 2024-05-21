import app from "./app";
import "./config/connection"
import { dbConnection } from "./config/connection";

const PORT = 3030;

dbConnection.sync().then(() => console.log("Connected to DB"));

app.listen(PORT, () => 
  console.log(`http://localhost:${PORT}`));

