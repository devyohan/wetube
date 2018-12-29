'use strict';
import express from 'express';
import logger from 'morgan';
const app = express();
const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

// 지금까지는 response 로 늘 고정된 텍스트만 전송했지만, html, css 를 전송하도록 개선해나가도록 하겠습니다.

const handlProfile = (req, res) => res.send("Profile!!");

// tiny : GET / 304 - - 3.842 ms
// app.use(logger('tiny'));
// dev : GET / 304 4.104 ms - -
app.use(logger('dev'));

app.get('/', handlProfile);



app.get('/asdf', function(req, res) {
    console.log(req);
    res.send("req");
})

app.listen(PORT, handleListening);