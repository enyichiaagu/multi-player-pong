import path from 'node:path';
import express from 'express';

const api = express();

api.use(express.static(path.join(import.meta.dirname, 'public')));

api.use('/', express.static('index.html'));

export default api;
