CREATE TABLE users(
userid INT(11) PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(200),
phone INT(11) 
)


CREATE TABLE student(
studentid INT(11) PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(200),
firstname VARCHAR(200),
lastname VARCHAR(200),
email VARCHAR(200),
password VARCHAR(200),
phone INT(11),
attendence INT(11) 
)

CREATE TABLE teacher(
teacherid INT(11) PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(200),
firstname VARCHAR(200),
lastname VARCHAR(200),
email VARCHAR(200),
password VARCHAR(200),
phone INT(11),
attendence INT(11) 
)