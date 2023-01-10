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

