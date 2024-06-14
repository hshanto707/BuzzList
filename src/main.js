import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routerV1 from './routes/v1/routes.js'
import { connectWithDb } from './db/db.js'
import schema from './config/config.schema.js';
import config from './config/config.service.js';

const httpLogger = morgan(':method :url :status :res[content-length] - :response-time ms');

const app = express();

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(httpLogger);
app.use(
  cors({
    origin: '*',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
)

// Connet with the database
const startServer = async () => {
  try {
    await connectWithDb();
    app.listen(config.PORT, () => {
      console.log(`Server is running on http://localhost:${config.PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
};

startServer();

// Swagger documentation UI

// API routes
app.use('/api/v1', routerV1)

// Gloabl error handler

export default app;
