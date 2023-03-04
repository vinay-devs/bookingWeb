const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json("Hello")
})
app.get('/register', (req, res) => {
    const { name, email, password } = req.body;
    // res.send({ name, email, password });
})

app.listen(4000, () => {
    console.log('Server is running');
});