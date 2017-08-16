# threecss-question

threecss-question是基于ThreeCSS分布式框架开发的一款调查问卷项目。


体验地址：
https://question.threecss.com


打版本：在项目根目录下，配置好build-custom.properties每个项目的路径及发布路径，执行

	ant


配置：

	dist/ThreeCSSQuestionClient/js/app/Url.js-----访问调查问卷服务器

	dist/ThreeCSSQuestionConfigData/mybatis-config.xml---访问调查问卷数据库

	dist/ThreeCSSQuestion.properties----ThreeCSSQuestionConfigData在服务器路径


推荐环境：

	jdk-8u121

	apache-tomcat-8.5.12

	MariaDB-10.1.22

	CentOS-7-1611


发布项目：

1、安装数据库
	
	create database threecssquestion
	
	source ****/threecssquestion.sql

2、将ThreeCSSQuestionConfigData放入服务器某个路径，例如
	
	/home/ThreeCSSQuestionConfigData

3、将ThreeCSSQuestion.properties放入tomcat根目录下，例如
	
	/home/tomcat/ThreeCSSQuestion.properties
	
	并修改config_dir对应的ThreeCSSQuestionConfigData路径

4、将ThreeCSSQuestionClient与ThreeCSSQuestion.war放入tomcat/webapps，例如
	
	/home/tomcat/webapps/ThreeCSSQuestion.war
	
	/home/tomcat/webapps/ThreeCSSQuestionClient


threecss-question功能：

1、提供API：
	
	提交答案、获取问题类型
	获取问题答案
	获取问题某答案回答者的人员
	
2、前端例子：
	
	我想听，我想讲，看统计




