require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { connectDB } = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1", routes);

async function start() {
  await connectDB(process.env.MONGODB_URI);
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`🚀 API running on http://localhost:${port}`));
}

start().catch((err) => {
  console.error("❌ Failed to start API:", err.message);
  process.exit(1);
});
