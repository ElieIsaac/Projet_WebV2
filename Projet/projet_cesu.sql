-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  sam. 23 mai 2020 à 15:23
-- Version du serveur :  10.4.6-MariaDB
-- Version de PHP :  7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projet_cesu`
--

-- --------------------------------------------------------

--
-- Structure de la table `blesses`
--

CREATE TABLE `blesses` (
  `ID` int(11) NOT NULL,
  `NOM` varchar(255) DEFAULT NULL,
  `PRENOM` varchar(255) DEFAULT NULL,
  `VIVANT` tinyint(1) NOT NULL DEFAULT 1,
  `VIE` int(11) NOT NULL DEFAULT 100,
  `CHARGE` tinyint(1) NOT NULL DEFAULT 0,
  `BLESSURES` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `blesses`
--

INSERT INTO `blesses` (`ID`, `NOM`, `PRENOM`, `VIVANT`, `VIE`, `CHARGE`, `BLESSURES`) VALUES
(15, 'pqhmq', 'qeywv', 0, 0, 1, 1),
(16, 'miapf', 'kqzhq', 0, 0, 1, 1),
(17, 'kaubb', 'gzcsr', 0, 0, 1, 1),
(18, 'efufm', 'ctbgi', 0, 0, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `hopitaux`
--

CREATE TABLE `hopitaux` (
  `ID` int(11) NOT NULL,
  `NOM` varchar(100) NOT NULL,
  `PLACE` int(20) NOT NULL,
  `TEMPS` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hopitaux`
--

INSERT INTO `hopitaux` (`ID`, `NOM`, `PLACE`, `TEMPS`) VALUES
(1, 'Garden Medical Center', 10, 4),
(2, 'Lilypad Gardens Medical Clinic', 5, 2),
(3, 'Twin Lakes Clinic', 4, 1),
(4, 'Silver Oak Clinic', 16, 6);

-- --------------------------------------------------------

--
-- Structure de la table `login`
--

CREATE TABLE `login` (
  `pseudo` varchar(255) NOT NULL,
  `motdepasse` varchar(255) NOT NULL,
  `vue` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `login`
--

INSERT INTO `login` (`pseudo`, `motdepasse`, `vue`) VALUES
('pompier', 'pompier', 'index1.php'),
('ambulancier', 'ambulancier', 'index2.php'),
('medecin', 'medecin', 'index3.php');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `MESSAGE` varchar(255) DEFAULT NULL,
  `EMETTEUR` varchar(50) DEFAULT NULL,
  `DESTINATAIRE` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `MESSAGE`, `EMETTEUR`, `DESTINATAIRE`) VALUES
(103, 'ypyooyooyoyoyoyo', 'ambulancier', 'pompier'),
(102, 'ezaeae', 'pompier', 'pompier'),
(101, 'test', 'pompier', 'pompier'),
(100, 'azezaezae', 'pompier', 'ambulancier'),
(99, 'azezaea', 'pompier', 'azezaea'),
(98, 'azeazezaezaeaz', 'pompier', NULL),
(97, 'testambulancier', 'pompier', NULL),
(96, 'azeaeza', 'medecin', NULL),
(95, 'azeaz', 'pompier', NULL),
(94, 'azeaz', 'pompier', NULL),
(93, 'yoyoyoyy', NULL, NULL),
(92, 'aaaaa', NULL, NULL),
(91, 'azeaz', NULL, NULL),
(90, 'aze', NULL, NULL),
(89, 'eaz', NULL, NULL),
(104, 'test', 'medecin', 'medecin'),
(105, 'test', 'medecin', 'medecin'),
(106, 'test', 'medecin', 'medecin'),
(107, 'test', 'medecin', 'medecin'),
(108, 'test', 'medecin', 'medecin'),
(109, 'trererere', 'medecin', 'medecin'),
(110, 'trererere', 'medecin', 'medecin'),
(111, 'coucou', 'medecin', 'pompier'),
(112, 'salut', 'pompier', 'medecin'),
(113, 'salut', 'pompier', 'medecin'),
(114, 'salut', 'pompier', 'medecin'),
(115, 'bizarre', 'pompier', 'medecin');

-- --------------------------------------------------------

--
-- Structure de la table `victime`
--

CREATE TABLE `victime` (
  `ID` int(11) NOT NULL,
  `NOM` varchar(255) DEFAULT NULL,
  `PRENOM` varchar(255) DEFAULT NULL,
  `VIVANT` int(1) NOT NULL DEFAULT 1,
  `VIE` int(11) NOT NULL DEFAULT 100,
  `CHARGE` int(1) NOT NULL DEFAULT 0,
  `ETAT` enum('0','1','2','3','4','5') DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `victime` (`NOM`, `PRENOM`, `VIVANT`, `VIE`, `CHARGE`, `etat`) VALUES
( 'Dupond', 'Jean', 1, 50, 1, '2');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `blesses`
--
ALTER TABLE `blesses`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `hopitaux`
--
ALTER TABLE `hopitaux`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`pseudo`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `victime`
--
ALTER TABLE `victime`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `blesses`
--
ALTER TABLE `blesses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `hopitaux`
--
ALTER TABLE `hopitaux`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT pour la table `victime`
--
ALTER TABLE `victime`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
