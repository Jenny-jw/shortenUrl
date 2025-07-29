import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import urlRoutes from "./routes/urls.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

await connectDB();

app.use(express.json()); // When receiving a "Content-Type: application/json" HTTP request, automatically read the JSON as JavaScript object and mount on req.body
app.use("/api/urls", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} 🚀`);
});
