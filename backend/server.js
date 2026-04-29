import app from "./app.js";
import sequelize from "./src/config/db.js";
import "./src/models/userModel.js";
import "./src/models/taskModel.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // 1. Test connection
    await sequelize.authenticate();
    console.log("✅ Database connected");

    // 2. CREATE TABLES HERE 👇
    await sequelize.sync();

    console.log("✅ Tables synced");

    // 3. Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

startServer();
