import express from 'express';
import http from 'http';
import errorMiddleware from './middleware/error.middleware.js';
import config from './config/config.js';

const app = express();
const httpServer = http.createServer(app);

// middlewares
app.use(express.json());

// routes
import authRoutes from './modules/auth/auth.route.js';

app.use('/api/v1/auth', authRoutes);

// 404 route handler for undefined routes
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'sucess',
    message: 'Welcome to hostel managment system',
    environment: config.NODE_ENV,
  });
});

// error middleware
app.use(errorMiddleware);

export default httpServer;
