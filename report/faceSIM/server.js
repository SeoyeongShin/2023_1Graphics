const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const conn = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '12343',
    database: 'test'
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
