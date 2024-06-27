import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './routes/v1/index.js'
import authRouter from './routes/v1/auth.js'
import usersRouter from './routes/v1/users.js'
import tasksRouter from './routes/v1/tasks.js'
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
app.use('/', indexRouter)
app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/users/', usersRouter)
app.use('/api/v1/tasks/', tasksRouter)

// Gloabl error handler

export default app;
