import "./db";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4000;

const handleListenning = () => console.log(`listenning on http://localhost:${PORT}`);

app.listen(PORT, handleListenning);