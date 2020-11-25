CREATE DATABASE COLEGIO;
USE COLEGIO;
CREATE TABLE usuarios(
     UserId INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
     UserName VARCHAR(16) NOT NULL,
     UserPassword VARCHAR(60) NOT NULL,
     UserCreate_at timestamp NOT NULL DEFAULT current_timestamp,
     UserModify_at DATETIME NOT NULL ,
     UserEstado BIT(1) NOT NULL,
     UNIQUE KEY(UserName)
 );
 CREATE TABLE links (
     LinkId int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
     LinkTitle VARCHAR(150) NOT NULL,
     LinkUrl VARCHAR(255) NOT NULL,
     LinkDescription Text NOT NULL,
     UserId INT(11),
     LinkCreated_at timestamp NOT NULL DEFAULT current_timestamp,
     CONSTRAINT fk_user FOREIGN KEY (UserId) REFERENCES usuarios(UserId) 
 )
 
