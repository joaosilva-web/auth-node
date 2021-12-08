import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';

import routes from './routes/routes'

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use('/api', routes);