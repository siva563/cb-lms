const mongoose = require("mongoose");

async function connectDB(mongoUri) {
  if (!mongoUri) throw new Error("MONGODB_URI missing");
  mongoose.set("strictQuery", true);
  await mongoose.connect(mongoUri);
  console.log("✅ MongoDB connected");
}

module.exports = { connectDB };
