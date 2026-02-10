import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.static(path.join(__dirname, '../client')));
app.listen(5000, '0.0.0.0', () => console.log('Server running on port 5000'));
