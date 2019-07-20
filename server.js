//Import NodeJS modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const async = require('async');

//Establish connection to database
var sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Richieisprincess78321!',
    insecureAuth: true
});

//Attempt connection to MySQL
console.log("Connecting to MySQL database...");
sqlConnection.connect((err) => {
    if (err) {
        console.log("Failed to connect to MySQL server: " + err.stack);
        return;
    }

    startExpressServer();
});

function startExpressServer() {
    console.log("Starting Express server...");
    
    const app = express();
    app.use(bodyParser.json());
    const port = 5000;

    app.get('/api/submissions', getSubmissions);
    //app.post('/api/submissions', postToSubmissions);

    app.listen(port, (err) => {
        if (err) {
            console.log("Failed to start the Express server on port " + port);
            sqlConnection.end();
            return;
        }
        console.log("Server started on port " + port);
    });
}

function getSubmissions(req, res, next) {
    function makeQuery(query) {
        return (callback) => {
            sqlConnection.query(query, (err, rows, fields) => {
                if (err) {
                    callback(err, null);
                    next(err);
                }
                
                callback(null, rows);
            });
        }
    }

    async.parallel([
        makeQuery("SELECT * FROM submission_data.student_submissions"),
        makeQuery("SELECT * FROM submission_data.submitted_videos")
    ], (err, results) => {
        if (err) {
            next(err);
        }
        res.json({
            student_submissions: results[0],
            submitted_videos: results[1]
        });
    });
}

function postToSubmissions(req, res, next) {
    
}