const express =require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Hello123`);
});

//
app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhist:${port}`);
});
//asdasda