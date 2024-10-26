const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Darsana27#',
    database: 'careerconnect'
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password =?";
    const values = [req.body.username, req.body.password];
    db.query(sql, values, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })
})

app.listen(8000, () => {
    console.log('Server running on port 8000');
});