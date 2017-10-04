DROP DATABASE IF exists burgers_db;
CREATE DATABASE burgers_db;
SET SQL_SAFE_UPDATES = 0;


USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean,
    date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);


