import { Server } from 'socket.io';
import logger from '../loggers/winston.logger.js';

const initSocket = async (httpServer) => {
  const io = new Server(httpServer, {});

  io.on('connection', (socket) => {
    logger.info(`New client connected to ${socket.id}`);

    socket.on('disconnect', (reason) => {
      logger.info(`client disconnect due to ${reason} Reason of id ${socket.id}`);
    });
  });
};

export default initSocket;
