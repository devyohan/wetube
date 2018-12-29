import express from 'express';

export const userRouter = express.Router();

// 익명 함수로 req, res 처리
userRouter.get('/', (req, res) => res.send('user index'));
userRouter.get('/edit', (req, res) => res.send('user edit'));
userRouter.get('/password', (req, res) => res.send('user password'));