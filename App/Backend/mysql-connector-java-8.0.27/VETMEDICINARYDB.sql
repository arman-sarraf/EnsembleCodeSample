/*Create DATABASE*/
DROP DATABASE IF EXISTS VETMEDICINARYDB;
CREATE DATABASE VETMEDICINARYDB; 
USE VETMEDICINARYDB;

/*-----------------------USER----------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.USER;
CREATE TABLE VETMEDICINARYDB.USER (
  UserID INT NOT NULL,
  Password INT NOT NULL,
  Lname CHAR(15) NOT NULL,
  Fname CHAR(15) NOT NULL,
  Phone CHAR(20) NOT NULL,
  Email CHAR(50) NULL,
  Sex CHAR(50) NULL,
  Date_B CHAR(12) NULL,
  ActivationDate CHAR(12) NOT NULL,
  PRIMARY KEY (UserID));

INSERT INTO VETMEDICINARYDB.USER (UserID, Password, Lname, Fname, Phone, Email, Sex, Date_B, ActivationDate) 
VALUES 
('985410', '3333', 'Smith', 'Anjella', '4039457889', 'an_sm@hotmail.com', 'F', '1980-10-23', '2019-08-11'),
('547896', '1212', 'Elsher', 'Olivia', '8564411422', 'Oliv_xoxo@yahoo.com', 'F', '1990-04-18', '2000-12-07'),
('475625', '1561', 'Levine', 'Lucas', '6537418996', 'Lucas2020@gmail.com', 'M', '1993-11-30', '2010-04-16'),
('123589', '6532', 'Ashley', 'Oliver', '6506336523', 'Ashley_olivi@gmail.com', 'F', '1989-03-14', '2021-06-22'),
('784512', '7788', 'Hansley', 'Isabella', '7845259874', 'Hansley_isabi@gmail.com', 'M', '1990-05-25', '2019-09-19'),
('456325', '6510', 'Monroe', 'Mia', '4066598874', 'Monroe_mi@gmail.com', 'M', '1992-09-07', '2020-05-11'),
('852369', '1250', 'Lopez', 'Ava', '3434147788', 'Lopez_ai@gmail.com', 'F', '1987-06-03', '2021-03-02'),
('784632', '8585', 'Keller', 'Benjamin', '9898425125', 'Keller_benji@gmail.com', 'M', '1999-02-16', '2021-08-19'),
('442153', '3020', 'Ford', 'James', '7844512452', 'Ford_jamei@gmail.com', 'F', '1960-12-13', '2019-10-10'),
('784513', '8080', 'Kazem', 'Sabounchi', '7414582456', 'Kazem_sabounch@mit.org', 'M', '1938-07-14', '2004-06-25');

/*----------------Admin-----------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.Admin;
CREATE TABLE VETMEDICINARYDB.Admin (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));

INSERT INTO VETMEDICINARYDB.Admin (UserID, Permission) 
VALUES 
('547896', 'Admin'),
('784632', 'Admin');


/*---------------TEACHER_TECHNICIAN---------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.TEACHER_TECHNICIAN;
CREATE TABLE VETMEDICINARYDB.TEACHER_TECHNICIAN (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));
  
INSERT INTO VETMEDICINARYDB.TEACHER_TECHNICIAN (UserID, Permission) 
VALUES 
('985410', 'Teacher'),
('475625', 'Teacher');


/*-----------------CARE_ATTENDANT------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.CARE_ATTENDANT;
CREATE TABLE VETMEDICINARYDB.CARE_ATTENDANT (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));

INSERT INTO VETMEDICINARYDB.CARE_ATTENDANT (UserID, Permission) 
VALUES 
('123589', 'Care'),
('784512', 'Care');


/*--------------------------HEALTH_TECHNICIAN-----------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HEALTH_TECHNICIAN;
CREATE TABLE VETMEDICINARYDB.HEALTH_TECHNICIAN (
  UserID INT NOT NULL,
  Permission CHAR(10) NOT NULL,
  PRIMARY KEY (UserID),
  FOREIGN KEY (UserID) REFERENCES VETMEDICINARYDB.USER (UserID));

INSERT INTO VETMEDICINARYDB.HEALTH_TECHNICIAN (UserID, Permission) 
VALUES 
('456325', 'Health'),
('852369', 'Health');

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
('442153', 'Student', '20211221'),
('784512', 'Student', '20201019');


/*-------------------ANIMAL---------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.ANIMAL;
CREATE TABLE VETMEDICINARYDB.ANIMAL (
  Animal_ID INT NOT NULL,
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
  

INSERT INTO VETMEDICINARYDB.ANIMAL (Animal_ID, Status, Tattoo, Date_B, City, Breed, Type, Name, Sex, User_ID) 
VALUES 
('101', 'Available', '982', '10/21/2017', 'Calgary', 'DSH', 'Cat', 'Cinnamon', 'M', '456325'),
('102', 'Available', '413', '03/04/2020', 'Calgary', 'Manx', 'Cat', 'Ginger', 'M', '456325'),
('103', 'Needs Vaccination', '362', '06/23/2015', 'Cochrane', 'Bulldog', 'Dog', 'Maverik', 'F', '456325'),
('104', 'Injured', '734', '04/15/2012', 'Canmore', 'Shire', 'Horse', 'Seabiscuit', 'M', '852369'),
('105', 'Available', '392', '07/13/2018', 'Calgary', 'Poodle', 'Dog', 'Frank', 'F', '456325'),
('106', 'Available', '734', '05/01/2016', 'Lethbridge', 'Boxer', 'Dog', 'Clifford', 'F', '456325'),
('107', 'Needs new medication', '274', '08/02/2018', 'Okotoks', 'Scottish Fold', 'Cat', 'Ruben', 'F', '456325'),
('108', 'Available', '463', '12/10/2019', 'Cochrane', 'Golden Retriever', 'Dog', 'Spot', 'M', '456325'),
('109', 'Available', '427', '10/02/2012', 'Calgary', 'Throughbred', 'Horse', 'Dakota', 'M', '852369'),
('110', 'Injured', '246', '01/24/2016', 'Calgary', 'DSH', 'Cat', 'Whiskey', 'M', '456325');

/*------------------------ANIMAL_PROBLEM-----------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.ANIMAL_PROBLEM;
CREATE TABLE VETMEDICINARYDB.ANIMAL_PROBLEM (
  Animal_ID INT NOT NULL,
  Disease VARCHAR(15) NOT NULL,
  Description VARCHAR(200) NOT NULL,
  PRIMARY KEY (Animal_ID),
  FOREIGN KEY (Animal_ID) REFERENCES VETMEDICINARYDB.ANIMAL (Animal_ID));
	
INSERT INTO VETMEDICINARYDB.ANIMAL_PROBLEM (Animal_ID, Disease, Description) 
VALUES 
('103', 'Diabetes', 'Animal has Diabetes, which is a disease in which it\'s body either can\'t produce insulin.'),
('109', 'Cancer', 'Animal has developed cancer in it\'s hooves.'),
('107', 'Arthritis', 'Arthritis is a disease that affects the joints of the animal in its left front leg.');


/*------------------ANIMAL_PRESCRIPTION----------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.ANIMAL_PRESCRIPTION;
CREATE TABLE VETMEDICINARYDB.ANIMAL_PRESCRIPTION (
  Script_Record INT NOT NULL,
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
  
INSERT INTO VETMEDICINARYDB.ANIMAL_PRESCRIPTION (Script_Record, Drug_Name, Delivery_Method, User_ID, Date, Dosage, Instructions, Treatment_Method, Animal_ID)
VALUES 
('1', 'Rutin', 'Oral', '456325', '2021-12-08', '20', 'Give to the animal once a day with food', 'To reduce pain', '101'),
('2', 'Sotalol', 'Oral', '456325', '2021-12-09', '10', 'Give to the animal twice dailty', 'To reduce inflamation', '103'),
('3', 'Taurine', 'Needle', '852369', '2021-12-10', '1', 'Inject into animal once in the morning.', 'To reduce flare ups', '109');


/*---------------------------HISTORY---------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HISTORY;
CREATE TABLE VETMEDICINARYDB.HISTORY (
  Record_ID INT NOT NULL,
  Date VARCHAR(15) NOT NULL,
  Measurment VARCHAR(200) NOT NULL,
  Value INT NULL,
  User_ID INT NOT NULL,
  Vaccination CHAR(1) NULL,
  Animal_ID INT NOT NULL,
  PRIMARY KEY (Record_ID),
  FOREIGN KEY (User_ID) REFERENCES VETMEDICINARYDB.USER (UserID),
  FOREIGN KEY (Animal_ID) REFERENCES VETMEDICINARYDB.ANIMAL (Animal_ID));


INSERT INTO VETMEDICINARYDB.HISTORY (Record_ID, Date, Measurment, Value, User_ID, Vaccination, Animal_ID) 
VALUES 
('1', '2019-04-23', 'Weight', '107', '123589', 'N', '103'),
('2', '2019-04-26', 'Blood concentration', '88', '784512', 'N', '106'),
('3', '2018-11-21', 'Heart beat', '120', '852369', 'N', '104'),
('4', '2019-04-23', 'temperature', '38', '456325', 'N', '107'),
('5', '2019-04-24', 'Vaccination', '10', '852369', 'Y', '109'),
('6', '03/04/2021', 'Photo', null,'123589', 'N', '101'),
('7', '06/23/2021', 'Photo', null,'784512', 'N', '104'),
('8', '04/15/2021', 'Photo', null,'123589', 'N', '106'),
('9', '04/15/2020', 'Photo', null,'784512', 'N', '108'),
('10', '02/13/2020', 'Comment', null,'985410', 'N', '109'),
('11', '02/11/2021', 'Comment', null,'475625', 'N', '110'),
('12', '01/15/2021', 'Comment', null,'784512', 'N', '101');


/*---------------------------HISTORY_PHOTOS-------------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HISTORY_PHOTOS;
CREATE TABLE VETMEDICINARYDB.HISTORY_PHOTOS (
  Record_ID INT NOT NULL,
  Image_ID INT NULL,
  File_Name VARCHAR(10) NOT NULL,
  Type VARCHAR(4) NOT NULL,
  PRIMARY KEY (Record_ID),
  FOREIGN KEY (Record_ID) REFERENCES VETMEDICINARYDB.HISTORY (Record_ID));

INSERT INTO VETMEDICINARYDB.HISTORY_PHOTOS (Record_ID, Image_ID, File_Name, Type) 
VALUES 
('6', '1', 'Image1', 'jpeg'),
('7', '2', 'Image2', 'jpeg'),
('8', '3', 'Image3', 'jpeg'),
('9', '4', 'Image4', 'png');

/*---------------------HISTORY_COMMENTS--------------------------*/
DROP TABLE IF EXISTS VETMEDICINARYDB.HISTORY_COMMENTS;
CREATE TABLE VETMEDICINARYDB.HISTORY_COMMENTS (
  Record_ID INT NOT NULL,
  Comment_ID INT NOT NULL,
  Description VARCHAR(200) NOT NULL,
  PRIMARY KEY (Record_ID),
  FOREIGN KEY (Record_ID) REFERENCES VETMEDICINARYDB.HISTORY (Record_ID));
	
INSERT INTO VETMEDICINARYDB.HISTORY_COMMENTS (Record_ID, Comment_ID, Description) 
VALUES 
('10', '1', 'Animal has enflamed gums, may need dental work'),
('11', '2', 'Animal appears to be in good health, but is lathargic so may need further testing.'),
('12', '3', 'Animals blood work has come back negative');
