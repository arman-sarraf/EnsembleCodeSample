/*Create DATABASE*/
DROP DATABASE IF EXISTS VETMEDICINARYDB;
CREATE DATABASE VETMEDICINARYDB; 
USE VETMEDICINARYDB;

/*-----------------------USER----------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.USER;
CREATE TABLE VETMEDICINARYDB.USER (
  UserID INT NOT NULL AUTO_INCREMENT,
  Password INT NOT NULL,
  Status CHAR(15) NOT NULL,
  Lname CHAR(15) NOT NULL,
  Fname CHAR(15) NOT NULL,
  Phone CHAR(20) NOT NULL,
  Email CHAR(50) NULL,
  Sex CHAR(50) NULL,
  Date_B CHAR(12) NULL,
  ActivationDate CHAR(12) NOT NULL,
  PRIMARY KEY (UserID));

INSERT INTO VETMEDICINARYDB.USER (Status, Password, Lname, Fname, Phone, Email, Sex, Date_B, ActivationDate) 
VALUES 
('Active', '3333', 'Smith', 'Anjella', '4039457889', 'an_sm@hotmail.com', 'F', '1980-10-23', '2019-08-11'),
('Active', '1212', 'Elsher', 'Olivia', '8564411422', 'Oliv_xoxo@yahoo.com', 'F', '1990-04-18', '2000-12-07'),
('Active', '1561', 'Levine', 'Lucas', '6537418996', 'Lucas2020@gmail.com', 'M', '1993-11-30', '2010-04-16'),
('Active', '6532', 'Ashley', 'Oliver', '6506336523', 'Ashley_olivi@gmail.com', 'F', '1989-03-14', '2021-06-22'),
('Active', '7788', 'Hansley', 'Isabella', '7845259874', 'Hansley_isabi@gmail.com', 'M', '1990-05-25', '2019-09-19'),
('Active', '6510', 'Monroe', 'Mia', '4066598874', 'Monroe_mi@gmail.com', 'M', '1992-09-07', '2020-05-11'),
('Active', '1250', 'Lopez', 'Ava', '3434147788', 'Lopez_ai@gmail.com', 'F', '1987-06-03', '2021-03-02'),
('Active', '8585', 'Keller', 'Benjamin', '9898425125', 'Keller_benji@gmail.com', 'M', '1999-02-16', '2021-08-19'),
('Active', '3020', 'Ford', 'James', '7844512452', 'Ford_jamei@gmail.com', 'F', '1960-12-13', '2019-10-10'),
('Active', '8080', 'Kazem', 'Sabounchi', '7414582456', 'Kazem_sabounch@mit.org', 'M', '1938-07-14', '2004-06-25');

/*----------------ADMIN-----------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.ADMIN;
CREATE TABLE VETMEDICINARYDB.ADMIN (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));

INSERT INTO VETMEDICINARYDB.ADMIN (UserID, Permission) 
VALUES 
('1', 'Admin'),
('2', 'Admin');


/*---------------TEACHER_TECHNICIAN---------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.TEACHER_TECHNICIAN;
CREATE TABLE VETMEDICINARYDB.TEACHER_TECHNICIAN (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));
  
INSERT INTO VETMEDICINARYDB.TEACHER_TECHNICIAN (UserID, Permission) 
VALUES 
('3', 'Teacher'),
('4', 'Teacher');


/*-----------------CARE_ATTENDANT------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.CARE_ATTENDANT;
CREATE TABLE VETMEDICINARYDB.CARE_ATTENDANT (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));

INSERT INTO VETMEDICINARYDB.CARE_ATTENDANT (UserID, Permission) 
VALUES 
('5', 'Care'),
('6', 'Care');


/*--------------------------HEALTH_TECHNICIAN-----------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HEALTH_TECHNICIAN;
CREATE TABLE VETMEDICINARYDB.HEALTH_TECHNICIAN (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));

INSERT INTO VETMEDICINARYDB.HEALTH_TECHNICIAN (UserID, Permission) 
VALUES 
('7', 'Health'),
('8', 'Health');

/*----------------------STUDENT------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.STUDENT;
CREATE TABLE VETMEDICINARYDB.STUDENT (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  StudentID INT NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));
    
INSERT INTO VETMEDICINARYDB.STUDENT (UserID, Permission, StudentID) 
VALUES 
('9', 'Student', '20211221'),
('10', 'Student', '20201019');


/*-------------------ANIMAL---------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.ANIMAL;
CREATE TABLE VETMEDICINARYDB.ANIMAL (
  Animal_ID INT NOT NULL AUTO_INCREMENT,
  Status VARCHAR(100) NULL,
  Tattoo INT NULL,
  Date_B VARCHAR(20) NOT NULL,
  City VARCHAR(15) NOT NULL,
  Breed VARCHAR(25) NOT NULL,
  Type VARCHAR(10) NOT NULL,
  Name VARCHAR(15) NOT NULL,
  Sex CHAR(1) NULL,
  User_ID INT NOT NULL,
  PRIMARY KEY (Animal_ID),
  FOREIGN KEY (User_ID) REFERENCES VETMEDICINARYDB.HEALTH_TECHNICIAN (UserID));
  

INSERT INTO VETMEDICINARYDB.ANIMAL (Status, Tattoo, Date_B, City, Breed, Type, Name, Sex, User_ID) 
VALUES 
('Available', '982', '2017-10-21', 'Calgary', 'DSH', 'Cat', 'Cinnamon', 'M', '7'),
('Available', '413', '2020-03-04', 'Calgary', 'Manx', 'Cat', 'Ginger', 'M', '7'),
('Needs Vaccination', '362', '2015-06-23', 'Cochrane', 'Bulldog', 'Dog', 'Maverik', 'F', '7'),
('Injured', '734', '2012-04-15', 'Canmore', 'Shire', 'Horse', 'Seabiscuit', 'M', '8'),
('Available', '392', '2018-07-13', 'Calgary', 'Poodle', 'Dog', 'Frank', 'F', '7'),
('Available', '734', '2016-05-01', 'Lethbridge', 'Boxer', 'Dog', 'Clifford', 'F', '7'),
('Needs new medication', '274', '2018-08-02', 'Okotoks', 'Scottish Fold', 'Cat', 'Ruben', 'F', '7'),
('Available', '463', '2019-12-10', 'Cochrane', 'Golden Retriever', 'Dog', 'Spot', 'M', '7'),
('Available', '427', '2012-10-12', 'Calgary', 'Throughbred', 'Horse', 'Dakota', 'M', '8'),
('Injured', '246', '2016-01-24', 'Calgary', 'DSH', 'Cat', 'Whiskey', 'M', '7');

/*------------------------ANIMAL_PROBLEM-----------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.ANIMAL_PROBLEM;
CREATE TABLE VETMEDICINARYDB.ANIMAL_PROBLEM (
  Problem_ID INT NOT NULL AUTO_INCREMENT,
  Animal_ID INT NOT NULL,
  Disease VARCHAR(15) NOT NULL,
  Description VARCHAR(200) NOT NULL,
  PRIMARY KEY (Problem_ID));
	
INSERT INTO VETMEDICINARYDB.ANIMAL_PROBLEM (Animal_ID, Disease, Description) 
VALUES 
('3', 'Diabetes', 'Animal has Diabetes, which is a disease in which it\'s body either can\'t produce insulin.'),
('9', 'Cancer', 'Animal has developed cancer in it\'s hooves.'),
('7', 'Arthritis', 'Arthritis is a disease that affects the joints of the animal in its left front leg.');


/*------------------ANIMAL_PRESCRIPTION----------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.ANIMAL_PRESCRIPTION;
CREATE TABLE VETMEDICINARYDB.ANIMAL_PRESCRIPTION (
  Script_Record INT NOT NULL AUTO_INCREMENT,
  Drug_Name VARCHAR(15) NOT NULL,
  Delivery_Method VARCHAR(15) NOT NULL,
  User_ID INT NOT NULL,
  Date VARCHAR(15) NOT NULL,
  Dosage INT NOT NULL,
  Instructions VARCHAR(200) NOT NULL,
  Treatment_Method VARCHAR(200) NOT NULL,
  Animal_ID INT NOT NULL,
  PRIMARY KEY (Script_Record),
  FOREIGN KEY (User_ID) REFERENCES VETMEDICINARYDB.USER (UserID),
  FOREIGN KEY (Animal_ID) REFERENCES VETMEDICINARYDB.ANIMAL (Animal_ID));
  
INSERT INTO VETMEDICINARYDB.ANIMAL_PRESCRIPTION (Drug_Name, Delivery_Method, User_ID, Date, Dosage, Instructions, Treatment_Method, Animal_ID)
VALUES 
('Rutin', 'Oral', '7', '2021-12-08', '20', 'Give to the animal once a day with food', 'To reduce pain', '1'),
('Sotalol', 'Oral', '7', '2021-12-09', '10', 'Give to the animal twice dailty', 'To reduce inflamation', '3'),
('Taurine', 'Needle', '8', '2021-12-10', '1', 'Inject into animal once in the morning.', 'To reduce flare ups', '9');


/*---------------------------HISTORY---------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HISTORY;
CREATE TABLE VETMEDICINARYDB.HISTORY (
  Record_ID INT NOT NULL AUTO_INCREMENT,
  Date VARCHAR(15) NOT NULL,
  Measurement VARCHAR(200) NOT NULL,
  Value INT NULL,
  User_ID INT NOT NULL,
  Vaccination CHAR(1) NULL,
  Animal_ID INT NOT NULL,
  PRIMARY KEY (Record_ID),
  FOREIGN KEY (User_ID) REFERENCES VETMEDICINARYDB.USER (UserID),
  FOREIGN KEY (Animal_ID) REFERENCES VETMEDICINARYDB.ANIMAL (Animal_ID));


INSERT INTO VETMEDICINARYDB.HISTORY (Date, Measurement, Value, User_ID, Vaccination, Animal_ID) 
VALUES 
('2019-04-23', 'Weight', '107', '1', 'N', '3'),
('2019-04-26', 'Blood concentration', '2', '7', 'N', '6'),
('2018-11-21', 'Heart beat', '112', '3', 'N', '4'),
('2019-04-23', 'temperature', '30', '4', 'N', '7'),
('2019-04-24', 'Vaccination', '10', '5', 'Y', '9'),
('03/04/2021', 'Photo', 0,'6', 'N', '1'),
('06/23/2021', 'Photo', 0,'7', 'N', '4'),
('04/15/2021', 'Photo', 0,'1', 'N', '6'),
('04/15/2020', 'Photo', 0,'2', 'N', '8'),
('02/13/2020', 'Comment', 0,'8', 'N', '9'),
('02/11/2021', 'Comment', 0,'3', 'N', '10'),
('01/15/2021', 'Comment', 0,'7', 'N', '1');


/*---------------------------HISTORY_PHOTOS-------------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HISTORY_PHOTOS;
CREATE TABLE VETMEDICINARYDB.HISTORY_PHOTOS (
  Record_ID INT NOT NULL,
  Image_ID INT NOT NULL AUTO_INCREMENT,
  File_Name VARCHAR(500) NOT NULL,
  Type VARCHAR(4) NOT NULL,
  PRIMARY KEY (Image_ID));
  -- FOREIGN KEY (Record_ID) REFERENCES VETMEDICINARYDB.HISTORY (Record_ID));

-- INSERT INTO VETMEDICINARYDB.HISTORY_PHOTOS (Record_ID, File_Name, Type) 
-- VALUES 
-- ('6', 'Image1', 'jpeg'),
-- ('7', 'Image2', 'jpeg'),
-- ('8', 'Image3', 'jpeg'),
-- ('9', 'Image4', 'png');

/*---------------------HISTORY_COMMENTS--------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HISTORY_COMMENTS;
CREATE TABLE VETMEDICINARYDB.HISTORY_COMMENTS (
  Record_ID INT NOT NULL,
  Comment_ID INT NOT NULL AUTO_INCREMENT,
  Description VARCHAR(200) NOT NULL,
  PRIMARY KEY (Comment_ID));
  -- FOREIGN KEY (Record_ID) REFERENCES VETMEDICINARYDB.HISTORY (Record_ID));
	
INSERT INTO VETMEDICINARYDB.HISTORY_COMMENTS (Record_ID, Description) 
VALUES 
('10', 'Animal has enflamed gums, may need dental work'),
('11', 'Animal appears to be in good health, but is lathargic so may need further testing.'),
('12', 'Animals blood work has come back negative');
