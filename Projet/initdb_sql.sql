CREATE TABLE `victime` (
  `ID` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `NOM` varchar(255),
  `PRENOM` varchar(255),
  `VIVANT` tinyint(1) NOT NULL DEFAULT 1,
  `VIE` int(11) NOT NULL DEFAULT 100,
  `CHARGE` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `victime` (`NOM`, `PRENOM`, `VIVANT`, `VIE`, `CHARGE`) VALUES
('Dupon', 'Jean', 1, 100, 1);
INSERT INTO `victime` (`NOM`, `PRENOM`, `VIVANT`, `VIE`, `CHARGE`) VALUES
('Chirac', 'Jeanmi', 1, 100, 1);
INSERT INTO `victime` (`NOM`, `PRENOM`, `VIVANT`, `VIE`, `CHARGE`) VALUES
('Mike', 'Test', 1, 100, 1);