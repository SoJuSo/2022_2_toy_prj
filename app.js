const express =require('express');
const path = require("path");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(`index.html`));
});

//
app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhist:${port}`);
});
//asdasda