/*
Navicat MySQL Data Transfer

Source Server         : localhost_3307
Source Server Version : 50505
Source Host           : localhost:3307
Source Database       : questionnaire

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-07-10 07:52:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for question_naire
-- ----------------------------
DROP TABLE IF EXISTS `question_naire`;
CREATE TABLE `question_naire` (
  `id` varchar(64) NOT NULL,
  `question_1` varchar(255) DEFAULT NULL,
  `question_1_other` varchar(255) DEFAULT NULL,
  `question_2` varchar(255) DEFAULT NULL,
  `question_2_other` varchar(255) DEFAULT NULL,
  `question_3` varchar(255) DEFAULT NULL,
  `question_3_other` varchar(255) DEFAULT NULL,
  `question_4` varchar(255) DEFAULT NULL,
  `question_4_other` varchar(255) DEFAULT NULL,
  `question_5` varchar(255) DEFAULT NULL,
  `question_5_other` varchar(255) DEFAULT NULL,
  `question_6` varchar(255) DEFAULT NULL,
  `question_6_other` varchar(255) DEFAULT NULL,
  `question_7` varchar(255) DEFAULT NULL,
  `question_7_other` varchar(255) DEFAULT NULL,
  `question_8` varchar(255) DEFAULT NULL,
  `question_8_other` varchar(255) DEFAULT NULL,
  `question_9` varchar(255) DEFAULT NULL,
  `question_9_other` varchar(255) DEFAULT NULL,
  `question_10` varchar(255) DEFAULT NULL,
  `question_10_other` varchar(255) DEFAULT NULL,
  `question_11` varchar(255) DEFAULT NULL,
  `question_11_other` varchar(255) DEFAULT NULL,
  `question_12` varchar(255) DEFAULT NULL,
  `question_12_other` varchar(255) DEFAULT NULL,
  `question_13` varchar(255) DEFAULT NULL,
  `question_13_other` varchar(255) DEFAULT NULL,
  `question_14` varchar(255) DEFAULT NULL,
  `question_14_other` varchar(255) DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `input_1` varchar(255) DEFAULT NULL,
  `input_2` varchar(255) DEFAULT NULL,
  `input_3` varchar(255) DEFAULT NULL,
  `input_4` varchar(255) DEFAULT NULL,
  `input_5` varchar(255) DEFAULT NULL,
  `textarea_1` tinytext,
  `textarea_2` tinytext,
  `question_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
