import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';
import path from 'path';
import session from 'express-session';
let app = express();
let port = process.env.PORT || 3069;
// use mysql database

// create mysql connection

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'doctor',
    port: 3306,
    multipleStatements: true,
    
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        process.exit(-1);
    }
    console.log('connected as id ' + connection.threadId);
});

app.set('trust proxy', 1)
app.use(session({
    secret: 'amankrokx',
    saveUninitialized: true,
    sameSite: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: false,
        secure: false
    },
    resave: false,
}))

/*
// use following schema
drop database doctor;

-- create doctor database
CREATE DATABASE doctor;
-- use doctor database
USE doctor;
-- create doctor table
CREATE TABLE User(
    id INT NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password CHAR(255) NOT NULL,
    UserRoleid ENUM('1','2') NOT NULL,
    PRIMARY KEY (email)
);

-- create table hospital
CREATE TABLE hospital(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id) on delete cascade
);


-- create table doctor
CREATE TABLE doctor(
    id INT NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    hospital_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(id),
    FOREIGN KEY (id) REFERENCES User(id) on delete cascade
);
-- create patient table
CREATE TABLE patient(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id) on delete cascade
);

-- create table disease
CREATE TABLE disease(
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    PRIMARY KEY (name)
);

-- create table patientDetails
CREATE TABLE patientDetails(
    patient_id INT NOT NULL,
    bdate DATE ,
    sex VARCHAR(255) ,
    disease_name VARCHAR(255),

    PRIMARY KEY (patient_id),
    FOREIGN KEY (patient_id) REFERENCES patient(id),
    FOREIGN KEY (disease_name) REFERENCES disease(name) on delete cascade
);

-- create table Medication
CREATE TABLE Medication(
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    PRIMARY KEY (name, type)
);

-- create appointment table
CREATE TABLE appointment(
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    book_id INT NOT NULL,
    book_date DATE NOT NULL,
    pay_amount INT NOT NULL,
    day VARCHAR(255) NOT NULL,
    PRIMARY KEY (patient_id, book_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(id) on delete cascade,
    FOREIGN KEY (patient_id) REFERENCES patient(id) on delete cascade
);

*/



// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use cors to allow cross origin resource sharing
// app.use(cors());

// set the static files location /public/img will be /img for users
app.use(express.static(path.dirname + '/dist'));

// routes
// api to signup users using users table
app.post('/api/signup', function(req, res) {
    console.log(req.session);
    if (req.session.user) {
        res.status(200).json(req.session.user)
        return;
    }
    if (!req.body) {
        res.status(400).json({message: 'No data provided'});
        return;
    }
    let user = req.body;
    user.UserRoleid = 2;
    let sql = "INSERT INTO User (FirstName, LastName, email, password, UserRoleid) VALUES ('" + user.firstName + "', '" + user.lastName + "', '" + user.email + "', '" + user.password + "', '" + user.UserRoleid + "')";
    connection
    .query(sql, function(err, result) {
        if (err) {
            console.log(err);
            req.session.regenerate()
            res.status(500).json(err);
        } else {
            req.session.user = user
            res.status(200).json(result)
        }
        });
});

app.use(function(req, res, next) {
    console.log(req.session);

    console.log('!OPTIONS');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', "true");
    // accept content type
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept, Origin, X-Auth-Token, X-Requested-With, X-HTTP-Method-Override, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials, Access-Control-Max-Age');
    
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

// api to login users using users table
app.post('/api/login', function(req, res) {
    // check if request type is option
    console.log(req.session)
    if (req.session.user) {
        res.status(200).json(req.session.user)
        return;
    }
    if (!req.body) {
        res.status(400).json({message: 'No data provided'});
        return;
    }
    let user = req.body;
    let sql = "SELECT * FROM User WHERE email = '" + user.email + "' AND password = '" + user.password + "'";
    connection
        .query
        (sql, function(err, result) {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                if (result.length > 0) {
                    console.log(result[0]);
                    req.session.user = result[0]
                    req.session.save()
                    res.status(200).json(result);
                }

            }
        });
});


// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// npm script to install required packages
// npm install express body-parser cors mysql --save

// npm script to run the app
// node app.js
