-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema growthtrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `growthtrackerdb` ;

-- -----------------------------------------------------
-- Schema growthtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `growthtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `growthtrackerdb` ;

-- -----------------------------------------------------
-- Table `Event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Event` ;

CREATE TABLE IF NOT EXISTS `Event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS growthtracker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'growthtracker'@'localhost' IDENTIFIED BY 'growthtracker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'growthtracker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Event`
-- -----------------------------------------------------
START TRANSACTION;
USE `growthtrackerdb`;
INSERT INTO `Event` (`id`, `category`, `first_name`, `last_name`, `description`, `date`) VALUES (1, 'Height', 'Bodi', 'Crawford', 'Bodi grew a half inch in the last month', '1 Jun 2018');
INSERT INTO `Event` (`id`, `category`, `first_name`, `last_name`, `description`, `date`) VALUES (2, 'Height', 'Jude', 'Crawford', 'Jude grew a half inch in the last month', '1 Jun 2018');

COMMIT;

