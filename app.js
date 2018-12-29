'use strict';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app = express();

app.use(cookieParser());
app.use(bodyParser());
app.use(logger('dev'));
app.use(helmet());

// middleware 는 next 대신 res.send 로 전송시 연결이 끊어집니다.

app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

export default app;