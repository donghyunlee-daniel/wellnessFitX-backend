const express = require('express');

const app = express();
const port = 3000;
var user = new user("daniel", "lee","Male", "1993-09-03", "zmsdong@naver.com", "123-4567", "2024-04-01");

app.get('/', (req, res) => {
    res.send('Successful response.' );
    user.crud();
});

app.listen(port, () => console.log(`Example app is listening on port ${port}`));