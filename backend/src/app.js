import express from 'express';
import http from 'http';
import errorMiddleware from './middleware/error.middleware.js';
import config from './config/config.js';
import cookieParser from 'cookie-parser';

const app = express();
const httpServer = http.createServer(app);

// middlewares
app.use(express.json());
app.use(cookieParser());


// init socket server
initSocket(httpServer);

// rateLimting

// passport config

import passport from './config/passport.config.js';
app.use(passport.initialize());

// routes
import authRoutes from './modules/auth/auth.route.js';
import userRoute from './modules/user/user.route.js';
import initSocket from './sockets/index.js';

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoute);

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
