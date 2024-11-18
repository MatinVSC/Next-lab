import fs from "fs";
import path from "path";

export default async function getLogsHandler(req, res) {
    try {
        const filePath = path.join(process.cwd(), "logs.json");
        const logData = JSON.parse(await fs.readFileSync(filePath));
        res.status(200).json(logData);
    } catch (error) {
        console.error("Error reading logData:", error);
        res.status(500).json({error})
    }
}