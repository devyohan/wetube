'use strict';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { userRouter } from './router';

const app = express();

// 지금까지는 response 로 늘 고정된 텍스트만 전송했지만, html, css 를 전송하도록 개선해나가도록 하겠습니다.

const handlProfile = (req, res) =>
    res.send("Profile!!");

// app.use 는 순서를 지키며 실행해주세요. 

// tiny : GET / 304 - - 3.842 ms
// app.use(logger('tiny'));
// dev : GET / 304 4.104 ms - -
app.use(cookieParser());
app.use(bodyParser());
app.use(logger('dev'));
app.use(helmet());

// middleware 는 next 대신 res.send 로 전송시 연결이 끊어집니다.

app.use('/user', userRouter);

export default app;