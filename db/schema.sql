CREATE database `oqgf306b39x9ybxi`;

USE `oqgf306b39x9ybxi`;

CREATE TABLE cars (
  id INT NOT NULL,
  make VARCHAR(100) NULL,
  model VARCHAR(100) NULL,
  eng_dscr VARCHAR(100) NULL,
  PRIMARY KEY (id)
);
CREATE TABLE info (
  id INT NOT NULL,
  photo VARCHAR(1000) NULL,
  model VARCHAR(100) NULL,
  drive VARCHAR(100) NULL,
  fuelType1 VARCHAR(100) NULL,
  VClass VARCHAR(100) NULL,
  trany VARCHAR(100) NULL,
  createdOn VARCHAR(100) NULL,
  fuelCost08 INT(100) NULL,
  PRIMARY KEY (id)
);
USE `oqgf306b39x9ybxi`;

CREATE TABLE user(
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
username varchar(100) NOT NULL,
email varchar(100) NOT NULL,
password varchar(100) NOT NULL

)