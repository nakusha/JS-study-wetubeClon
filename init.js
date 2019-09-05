import "./db";
import app from "./app";

const PORT = 4000;

const handleListenning = () => console.log(`listenning on http://localhost:${PORT}`);

app.listen(PORT, handleListenning);