import fs from 'fs';
import path from 'path';

export default async function logHandler(req, res) {
    if (req.method === 'POST') {
        const logEntry = req.body

        const filePath = path.join(process.cwd(), "logs.json");

        try {
            const logs = fs.existsSync(filePath)
                ? JSON.parse(fs.readFileSync(filePath))
                : [];
            logs.push(logEntry);
            fs.writeFileSync(filePath, JSON.stringify(logs));
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error witing logs', error)
            res.status(500).json({error})
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}