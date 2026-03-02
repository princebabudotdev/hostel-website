import express from 'express';
import http from 'http';
import errorMiddleware from './middleware/error.middleware.js';
import config from './config/config.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
const httpServer = http.createServer(app);
import morganLogger from './loggers/morgan.looger.js';

// middlewares
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(morganLogger);
app.use(express.json({
  limit:"100kb" // limit JSON body size to 100kb
}));
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
