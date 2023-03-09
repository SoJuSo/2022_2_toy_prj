const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.use("/src", express.static(path.resolve("src")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(`newIndex.html`));
});

//
app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});