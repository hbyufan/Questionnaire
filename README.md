# Questionnaire

[![Build Status](https://travis-ci.org/dianbaer/Questionnaire.svg?branch=master)](https://travis-ci.org/dianbaer/Questionnaire)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/eb99600527704892aea51eddfac2010f)](https://www.codacy.com/app/232365732/Questionnaire?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dianbaer/Questionnaire&amp;utm_campaign=Badge_Grade)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Questionnaire是一个调查问卷项目。

基于grain

https://github.com/dianbaer/grain


打版本：在项目根目录下，执行

	ant


配置：

	dist/QuestionnaireClient/js/app/Url.js-----访问调查问卷服务器

	dist/QuestionnaireConfig/mybatis-config.xml---访问调查问卷数据库

	dist/QuestionnaireServer.properties----QuestionnaireConfig在服务器路径


推荐环境：

>快捷部署 https://github.com/dianbaer/deployment-server

	jdk-8u121

	apache-tomcat-8.5.12

	MariaDB-10.1.22

	CentOS-7-1611


发布项目：

1、安装数据库
	
	create database questionnaire
	
	source ****/questionnaire.sql

2、将QuestionnaireConfig放入服务器某个路径，例如
	
	/home/QuestionnaireConfig

3、将QuestionnaireServer.properties放入tomcat根目录下，例如
	
	/home/tomcat/QuestionnaireServer.properties
	
	并修改config_dir对应的QuestionnaireConfig路径

4、将QuestionnaireClient与QuestionnaireServer.war放入tomcat/webapps，例如
	
	/home/tomcat/webapps/QuestionnaireServer.war
	
	/home/tomcat/webapps/QuestionnaireClient


Questionnaire功能：

1、提供API：
	
	提交答案、获取问题类型
	获取问题答案
	获取问题某答案回答者的人员
	
2、前端例子：
	
	我想听，我想讲，看统计




