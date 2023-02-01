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
    phone VARCHAR(14),
    bdate DATE ,
    sex ENUM('M','F', 'O') NULL,
    password CHAR(255) NOT NULL,
    UserRoleid ENUM('1','2') NOT NULL,
    PRIMARY KEY (email)
);

-- Write query to add columns phone, bdate and sex
ALTER TABLE User ADD phone VARCHAR(14) NULL AFTER email;
ALTER TABLE User ADD bdate DATE NULL AFTER phone;
ALTER TABLE User ADD sex ENUM('M','F', 'O') NULL AFTER bdate;



INSERT into User (FirstName, LastName, email, password, UserRoleid) VALUES
( "doctor1", "strange", "doctor1@email.com", "password", 1),
-- create 10 more
( "doctor2", "strange", "doctor2@email.com", "password", 1),
( "doctor3", "strange", "doctor3@email.com", "password", 1),
( "doctor4", "strange", "doctor4@email.com", "password", 1),
( "doctor5", "strange", "doctor5@email.com", "password", 1),
( "doctor6", "strange", "doctor6@email.com", "password", 1),
( "doctor7", "strange", "doctor7@email.com", "password", 1),
( "doctor8", "strange", "doctor8@email.com", "password", 1),
( "doctor9", "strange", "doctor9@email.com", "password", 1),
( "doctor10", "strange", "doctor10@email.com", "password", 1);



-- create table doctor
CREATE TABLE doctor(
    id INT NOT NULL AUTO_INCREMENT,
    specialization VARCHAR(255) NOT NULL,
    description VARCHAR(4000) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id) on delete cascade
);


INSERT into doctor VALUES
(6, "Cardiologist", "Specialist in heart diseases and heart surgery and also in the treatment of blood vessels and blood circulation. MBBS, MD, DM (Cardiology)"),
(7, "Orthopedist",  "Specialist in the diagnosis and treatment of disorders of the musculoskeletal system and the effects of these disorders on the function of the joints, muscles, and nerves. MBBS, MS (Ortho)"),
(8, "Dentist", "Specialist in the diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity, maxillofacial area, and the adjacent and associated structures and their impact on the human body. MBBS, BDS"),
(9, "Dermatologist","Specialist in the diagnosis and treatment of skin conditions. MBBS, MD (Dermatology)"),
(10, "Gynecologist","Specialist in diagnosis and treatment of gynaecological disorders. MBBS, MD (Gynaecology, Obs & Gynae)"),
(11, "Neurologist","Specialist in the diagnosis and treatment of diseases of the nervous system, MBBS (AIIMS), MD (AIIMS), DM (AIIMS)"),
(12, "Ophthalmologist","Specialist in the diagnosis and treatment of diseases of the urinary tract, MBBS (AIIMS), MD (AIIMS), DM (AIIMS)"),
(13, "Pediatrician","Specialist in the diagnosis and treatment of diseases of the urinary tract, MBBS (AIIMS), MD (AIIMS), DM (AIIMS)"),
(14, "Psychiatrist","Specialist in the diagnosis and treatment of mental disorders, MBBS (AIIMS), MD (AIIMS), DM (AIIMS)"),
(15, "Urologist","Specialist in the diagnosis and treatment of diseases of the urinary tract, MBBS (AIIMS), MD (AIIMS), DM (AIIMS)");


    CREATE table patient_disease(
        user_id INT NOT NULL,
        disease_name VARCHAR(255) NOT NULL,
        PRIMARY KEY (user_id, disease_name),
        FOREIGN KEY (user_id) REFERENCES User(id) on delete cascade,
        FOREIGN KEY (disease_name) REFERENCES disease(name) on delete cascade
    );

-- create table disease
CREATE TABLE disease(
    name VARCHAR(255) NOT NULL,
    medication VARCHAR(255) NOT NULL,
    PRIMARY KEY (name)
);
-- create appointment table
CREATE TABLE appointment(
    book_id INT NOT NULL AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    time_slot DATETIME NOT NULL,
    accepted BOOLEAN,
    PRIMARY KEY (book_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(id) on delete cascade,
    FOREIGN KEY (patient_id) REFERENCES User(id) on delete cascade
);

-- alter table doctor and add a new column for specialization after hospital_id
ALTER TABLE doctor ADD specialization VARCHAR(255) NOT NULL AFTER hospital_id;

-- delate table hospital
DROP TABLE hospital;

-- alter table doctor and remove foreign key hospital_id 
ALTER TABLE doctor DROP FOREIGN KEY doctor_ibfk_1;

-- alter table doctor and delete column hospital_id
ALTER TABLE doctor DROP COLUMN hospital_id;

ALTER table appointment ADD accepted BOOLEAN NULL AFTER time_slot;

-- create table user_feedback
CREATE TABLE user_feedback(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(256),
    feedback VARCHAR(4000),
    rating INT,
    PRIMARY KEY (id)
);

-- INSERT INTO user_feedback (user_id, feedback, rating) VALUES ()