const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 사용 환경에 맞게 수정
const conn = {
    host: 'localhost',
    port: 'port',
    user: 'user',
    password: 'your_password',
    database: 'your_database'
};

const connection = mysql.createConnection(conn);
connection.connect();

app.post('/insert', (req, res) => {
    const { distance, phoneNumber } = req.body;
    const query = `INSERT INTO face_similarity (distance, phoneNumber) VALUES (${distance}, '${phoneNumber}')`;

    connection.query(query, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error inserting data into the database.');
        } else {
            console.log(results);
            res.send('Data inserted successfully.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
