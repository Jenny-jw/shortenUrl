import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // When receiving a "Content-Type: application/json" HTTP request, automatically read the JSON as JavaScript object and mount on req.body
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} 🚀`);
});
