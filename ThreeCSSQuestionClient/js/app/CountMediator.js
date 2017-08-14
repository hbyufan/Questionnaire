function CountMediator() {
    this.map = [];
    this.mapName = [];
    this.mapQuestion = [];
    this.nowSelect = null;
    this.nowSelectNum = null;
    this.init = function (view) {
        this.map["listenQuestion"] = [];
        this.map["speakQuestion"] = [];

        this.mapName["listenQuestion"] = [];
        this.mapName["speakQuestion"] = [];

        this.mapQuestion["listenQuestion"] = [];
        this.mapQuestion["speakQuestion"] = [];

        this.map["listenQuestion"].push(1);
        this.map["listenQuestion"].push(2);
        this.map["listenQuestion"].push(3);
        this.map["listenQuestion"].push(4);
        this.map["listenQuestion"].push(5);
        this.map["listenQuestion"].push(6);
        this.map["listenQuestion"].push(7);
        this.map["listenQuestion"].push(8);
        this.map["listenQuestion"].push(9);
        this.map["listenQuestion"].push(10);
        this.map["listenQuestion"].push(11);
        this.map["listenQuestion"].push(12);
        this.map["listenQuestion"].push(13);
        this.map["listenQuestion"].push(14);
        this.mapName["listenQuestion"][1] = "1、我想听哪些前端（多选）";
        this.mapName["listenQuestion"][2] = "2、我想听哪些前端语言（多选）";
        this.mapName["listenQuestion"][3] = "3、我想听哪些前端框架（多选）";
        this.mapName["listenQuestion"][4] = "4、我想听哪些WebGL渲染框架（多选）";
        this.mapName["listenQuestion"][5] = "5、我想听哪些前端经验（多选）";
        this.mapName["listenQuestion"][6] = "6、我想听哪些服务器语言（多选）";
        this.mapName["listenQuestion"][7] = "7、我想听哪些数据库或缓存服务器（多选）";
        this.mapName["listenQuestion"][8] = "8、我想听哪些Java框架（多选）";
        this.mapName["listenQuestion"][9] = "9、我想听哪些Java数据库框架（多选）";
        this.mapName["listenQuestion"][10] = "10、我想听哪些Python-Web框架（多选）";
        this.mapName["listenQuestion"][11] = "11、我想听哪些分布式存储（多选）";
        this.mapName["listenQuestion"][12] = "12、我想听哪些虚拟化项目（多选）";
        this.mapName["listenQuestion"][13] = "13、我想听哪些大数据或深度学习的项目（多选）";
        this.mapName["listenQuestion"][14] = "14、我想听哪些服务器开发经验（多选）";

        this.mapQuestion["listenQuestion"][1] = {
            "A": "A.网页PC端",
            "B": "B.网页移动端",
            "C": "C.Android移动端",
            "D": "D.IOS移动端",
            "E": "E.Windows-PC客户端",
            "Z": "Z.其他"
        };
        this.mapQuestion["listenQuestion"][2] = {
            "A": "A.JavaScript(网页)",
            "B": "B.TypeScript(网页，OOP版JavaScript，微软开源)",
            "C": "C.Java（Android）",
            "D": "D.Kotlin（Android，跟Swift很像）",
            "E": "E.C#（Windows-PC端最好的选择）",
            "F": "F.C++（Windows-PC端，高品质客户端需要）",
            "G": "G.Objective-C(IOS，正在逐渐被Swfit取代)",
            "H": "H.Swift(IOS，跟Kotlin很像)",
            "I": "I.Html+CSS(网页)",
            "Z": "Z.其他"
        };
        this.mapQuestion["listenQuestion"][3] = {
            "A": "A.Bootstrap（Twitter开源框架，使用最广泛，10万+星）",
            "B": "B.Pure（轻量级CSS响应式框架，雅虎出品）",
            "C": "C.Angular（Google开源框架，格式较严格，依赖注入双向绑定）",
            "D": "D.PureMVC（纯MVC框架）",
            "E": "E.Jquery（前期开发起来太简单，后期势必难维护，建议适度使用）",
            "F": "F.自主开发commonjs（借鉴Starling与PureMVC）",
            "Z": "Z.其他"
        };
        this.mapQuestion["listenQuestion"][4] = {
            "A": "A.Three.js（3D渲染，效率一般）",
            "B": "B.Pixijs（2D渲染最快）",
            "C": "C.Egret（国货精品，国内使用率第一，效率一般）",
            "D": "D.Hilo（阿里出品，很简单兼容性好，WebGL、Dom、Canvas、Flash）",
            "Z": "Z.其他"
        };
        this.mapQuestion["listenQuestion"][5] = {
            "A": "A.如何创建自定义事件，开发事件类",
            "B": "B.动画的概念及动画需要注意的事项",
            "C": "C.通用组件的设计思路",
            "D": "D.显卡渲染的一些经验",
            "E": "E.前端解耦合的一些经验",
            "Z": "Z.其他"
        };
        this.mapQuestion["listenQuestion"][6] = {
            "A": "A.Java",
            "B": "B.Python（大势所趋，必会）",
            "C": "C.Nodejs（不如Python，慎用）",
            "D": "D.PHP（无多线程，多进程，可维护性差）",
            "E": "E.C++（高品质服务器需要）",
            "F": "F.C#（做前端语言很好，服务器差点）",
            "G": "G.Go（谷歌出品，用过都说好）",
            "H": "H.Lua（内嵌语言，大型项目很有价值）",
            "I": "I.Kotlin（跟Swift很像）",
            "Z": "Z.其他"
        };

        this.mapQuestion["listenQuestion"][7] = {
            "A": "A.MariaDB（Mysql开源版）",
            "B": "B.MongoDB（介于关系型与非关系型之间，可以使MongoDB优化非关系业务）",
            "C": "C.Redis（最流行的缓存服务器，支持硬盘存储）",
            "D": "D.Memcached（轻量级缓存服务器，逐渐被Redis取代）",
            "E": "E.HBase（Hadoop生态圈数据库）",
            "F": "F.Oracle",
            "Z": "Z.其他"
        };

        this.mapQuestion["listenQuestion"][8] = {
            "A": "A.Spring",
            "B": "B.Dropwizard（集成好的RESTful框架）",
            "C": "C.Struts2",
            "D": "D.Jersey（轻量级RESTful框架）",
            "E": "E.自主开发CommonLib（规范了内部通讯、外部通讯、线程模型的统一化）",
            "Z": "Z.其他"
        };

        this.mapQuestion["listenQuestion"][9] = {
            "A": "A.Mybatis",
            "B": "B.Hibernate",
            "Z": "Z.其他"
        };
        this.mapQuestion["listenQuestion"][10] = {
            "A": "A.Django（Openstack使用此框架，使用最广泛）",
            "B": "B.Flask（Python里的Spring，很轻量）",
            "C": "C.Tornado（FaceBook开源项目）",
            "Z": "Z.其他"
        };

        this.mapQuestion["listenQuestion"][11] = {
            "A": "A.Hadoop HDFS（分块存储，存小文件不好用）",
            "B": "B.Ceph（市场占有率最高）",
            "C": "C.Swift（对象存储，Openstack生态圈，存小文件很好）",
            "D": "D.GluserFS（网络化并行文件系统）",
            "Z": "Z.其他"
        };
        this.mapQuestion["listenQuestion"][12] = {
            "A": "A.Openstack（服务器虚拟化基于KVM）",
            "B": "B.Docker（容器虚拟化）",
            "Z": "Z.其他"
        };

        this.mapQuestion["listenQuestion"][13] = {
            "A": "A.Hadoop MapReduce（大数据并行处理框架）",
            "B": "B.Spark（流处理、机器学习、图形计算）",
            "C": "C.TensorFlow（Google开源的深度学习、人工智能框架）",
            "D": "D.Strom（Twitter开源实时处理框架）",
            "Z": "Z.其他"
        };

        this.mapQuestion["listenQuestion"][14] = {
            "A": "A.多线程一些经验和思路（设计优秀的多线程业务）",
            "B": "B.分布式一些经验和思路（集中管制和分管的思路）",
            "C": "C.内存，缓存，数据库一些思路（具体业务具体分析）",
            "Z": "Z.其他"
        };

        this.map["speakQuestion"].push(1);
        this.map["speakQuestion"].push(2);
        this.map["speakQuestion"].push(3);
        this.map["speakQuestion"].push(4);
        this.map["speakQuestion"].push(5);
        this.map["speakQuestion"].push(6);
        this.map["speakQuestion"].push(7);
        this.map["speakQuestion"].push(8);
        this.map["speakQuestion"].push(9);
        this.map["speakQuestion"].push(10);
        this.map["speakQuestion"].push(11);
        this.map["speakQuestion"].push(12);
        this.map["speakQuestion"].push(13);
        this.map["speakQuestion"].push(14);
        this.mapName["speakQuestion"][1] = "1、我想讲哪些前端（多选）";
        this.mapName["speakQuestion"][2] = "2、我想讲哪些前端语言（多选）";
        this.mapName["speakQuestion"][3] = "3、我想讲哪些前端框架（多选）";
        this.mapName["speakQuestion"][4] = "4、我想讲哪些WebGL渲染框架（多选）";
        this.mapName["speakQuestion"][5] = "5、我想讲哪些前端经验（多选）";
        this.mapName["speakQuestion"][6] = "6、我想讲哪些服务器语言（多选）";
        this.mapName["speakQuestion"][7] = "7、我想讲哪些数据库或缓存服务器（多选）";
        this.mapName["speakQuestion"][8] = "8、我想讲哪些Java框架（多选）";
        this.mapName["speakQuestion"][9] = "9、我想讲哪些Java数据库框架（多选）";
        this.mapName["speakQuestion"][10] = "10、我想讲哪些Python-Web框架（多选）";
        this.mapName["speakQuestion"][11] = "11、我想讲哪些分布式存储（多选）";
        this.mapName["speakQuestion"][12] = "12、我想讲哪些虚拟化项目（多选）";
        this.mapName["speakQuestion"][13] = "13、我想讲哪些大数据或深度学习的项目（多选）";
        this.mapName["speakQuestion"][14] = "14、我想讲哪些服务器开发经验（多选）";

        this.mapQuestion["speakQuestion"][1] = {
            "A": "A.网页PC端",
            "B": "B.网页移动端",
            "C": "C.Android移动端",
            "D": "D.IOS移动端",
            "E": "E.Windows-PC客户端",
            "Z": "Z.其他"
        };
        this.mapQuestion["speakQuestion"][2] = {
            "A": "A.JavaScript(网页)",
            "B": "B.TypeScript(网页，OOP版JavaScript，微软开源)",
            "C": "C.Java（Android）",
            "D": "D.Kotlin（Android，跟Swift很像）",
            "E": "E.C#（Windows-PC端最好的选择）",
            "F": "F.C++（Windows-PC端，高品质客户端需要）",
            "G": "G.Objective-C(IOS，正在逐渐被Swfit取代)",
            "H": "H.Swift(IOS，跟Kotlin很像)",
            "I": "I.Html+CSS(网页)",
            "Z": "Z.其他"
        };
        this.mapQuestion["speakQuestion"][3] = {
            "A": "A.Bootstrap（Twitter开源框架，使用最广泛，10万+星）",
            "B": "B.Pure（轻量级CSS响应式框架，雅虎出品）",
            "C": "C.Angular（Google开源框架，格式较严格，依赖注入双向绑定）",
            "D": "D.PureMVC（纯MVC框架）",
            "E": "E.Jquery（前期开发起来太简单，后期势必难维护，建议适度使用）",
            "F": "F.自主开发commonjs（借鉴Starling与PureMVC）",
            "Z": "Z.其他"
        };
        this.mapQuestion["speakQuestion"][4] = {
            "A": "A.Three.js（3D渲染，效率一般）",
            "B": "B.Pixijs（2D渲染最快）",
            "C": "C.Egret（国货精品，国内使用率第一，效率一般）",
            "D": "D.Hilo（阿里出品，很简单兼容性好，WebGL、Dom、Canvas、Flash）",
            "Z": "Z.其他"
        };
        this.mapQuestion["speakQuestion"][5] = {
            "A": "A.如何创建自定义事件，开发事件类",
            "B": "B.动画的概念及动画需要注意的事项",
            "C": "C.通用组件的设计思路",
            "D": "D.显卡渲染的一些经验",
            "E": "E.前端解耦合的一些经验",
            "Z": "Z.其他"
        };
        this.mapQuestion["speakQuestion"][6] = {
            "A": "A.Java",
            "B": "B.Python（大势所趋，必会）",
            "C": "C.Nodejs（不如Python，慎用）",
            "D": "D.PHP（无多线程，多进程，可维护性差）",
            "E": "E.C++（高品质服务器需要）",
            "F": "F.C#（做前端语言很好，服务器差点）",
            "G": "G.Go（谷歌出品，用过都说好）",
            "H": "H.Lua（内嵌语言，大型项目很有价值）",
            "I": "I.Kotlin（跟Swift很像）",
            "Z": "Z.其他"
        };

        this.mapQuestion["speakQuestion"][7] = {
            "A": "A.MariaDB（Mysql开源版）",
            "B": "B.MongoDB（介于关系型与非关系型之间，可以使MongoDB优化非关系业务）",
            "C": "C.Redis（最流行的缓存服务器，支持硬盘存储）",
            "D": "D.Memcached（轻量级缓存服务器，逐渐被Redis取代）",
            "E": "E.HBase（Hadoop生态圈数据库）",
            "F": "F.Oracle",
            "Z": "Z.其他"
        };

        this.mapQuestion["speakQuestion"][8] = {
            "A": "A.Spring",
            "B": "B.Dropwizard（集成好的RESTful框架）",
            "C": "C.Struts2",
            "D": "D.Jersey（轻量级RESTful框架）",
            "E": "E.自主开发CommonLib（规范了内部通讯、外部通讯、线程模型的统一化）",
            "Z": "Z.其他"
        };

        this.mapQuestion["speakQuestion"][9] = {
            "A": "A.Mybatis",
            "B": "B.Hibernate",
            "Z": "Z.其他"
        };
        this.mapQuestion["speakQuestion"][10] = {
            "A": "A.Django（Openstack使用此框架，使用最广泛）",
            "B": "B.Flask（Python里的Spring，很轻量）",
            "C": "C.Tornado（FaceBook开源项目）",
            "Z": "Z.其他"
        };

        this.mapQuestion["speakQuestion"][11] = {
            "A": "A.Hadoop HDFS（分块存储，存小文件不好用）",
            "B": "B.Ceph（市场占有率最高）",
            "C": "C.Swift（对象存储，Openstack生态圈，存小文件很好）",
            "D": "D.GluserFS（网络化并行文件系统）",
            "Z": "Z.其他"
        };
        this.mapQuestion["speakQuestion"][12] = {
            "A": "A.Openstack（服务器虚拟化基于KVM）",
            "B": "B.Docker（容器虚拟化）",
            "Z": "Z.其他"
        };

        this.mapQuestion["speakQuestion"][13] = {
            "A": "A.Hadoop MapReduce（大数据并行处理框架）",
            "B": "B.Spark（流处理、机器学习、图形计算）",
            "C": "C.TensorFlow（Google开源的深度学习、人工智能框架）",
            "D": "D.Strom（Twitter开源实时处理框架）",
            "Z": "Z.其他"
        };

        this.mapQuestion["speakQuestion"][14] = {
            "A": "A.多线程一些经验和思路（设计优秀的多线程业务）",
            "B": "B.分布式一些经验和思路（集中管制和分管的思路）",
            "C": "C.内存，缓存，数据库一些思路（具体业务具体分析）",
            "Z": "Z.其他"
        };

        $("#questionType").on("click", "div", this.onClickQuestionType);
        $("#questionNum").on("change", "input", this.onInputChange);
        $T.questionProxy.getQuestionType();
    }
    this.onInputChange = function (e) {
        $T.countMediator.nowSelectNum = parseInt(e.currentTarget.value);
        $T.questionProxy.getQuestionAnswer($T.countMediator.nowSelect, $T.countMediator.nowSelectNum);
    }
    this.onClickQuestionType = function (e) {
        var id = e.currentTarget.id;
        if (id == $T.countMediator.nowSelect) {
            return;
        }
        for (var i = 0; i < $T.questionProxy.questionType.length; i++) {
            $("#" + $T.questionProxy.questionType[i]).removeClass("questionSelect");
        }
        $("#" + id).addClass("questionSelect");
        $T.countMediator.nowSelect = id;
        $T.countMediator.showNowSelect();
    }
    this.showNowSelect = function () {
        $("#questionNum").empty();
        var array = this.map[this.nowSelect];
        for (var i = 0; i < array.length; i++) {
            var question = array[i];
            var questionContent = this.mapName[this.nowSelect][question];
            var view = this.createQuestionView(question, questionContent, i);
            $("#questionNum").append(view);
            if (i == 0) {
                this.nowSelectNum = question;
            }
        }
        $T.questionProxy.getQuestionTopAnswer(this.nowSelect);
        $T.questionProxy.getQuestionAnswer(this.nowSelect, this.nowSelectNum);
    }
    this.createQuestionView = function (question, questionContent, i) {
        var html = document.createElement("div");
        if (i == 0) {
            html.innerHTML = '<label for="option-' + question + '" class="pure-radio">' +
                '<input id="option-' + question + '" type="radio" name="optionsRadios" value="' + question + '"checked>' +
                questionContent +
                '</label>';
        } else {
            html.innerHTML = '<label for="option-' + question + '" class="pure-radio">' +
                '<input id="option-' + question + '" type="radio" name="optionsRadios" value="' + question + '">' +
                questionContent +
                '</label>';
        }

        html = $(html);
        html.addClass("timu");
        return html;
    }

    // 注销方法
    this.dispose = function () {

    }
    // 关心消息数组
    this.listNotificationInterests = [$T.notificationExt.GET_QUESTION_TYPE_SUCCESS, $T.notificationExt.GET_QUESTION_ANSWER_SUCCESS, $T.notificationExt.GET_QUESTION_TOP_ANSWER_SUCCESS];
    // 关心的消息处理
    this.handleNotification = function (data) {
        switch (data[0].name) {
            case $T.notificationExt.GET_QUESTION_TYPE_SUCCESS:
                this.getQuestionTypeSuccess(data[0].body);
                break;
            case $T.notificationExt.GET_QUESTION_ANSWER_SUCCESS:
                this.getQuestionAnswerSuccess(data[0].body);
                break;
            case $T.notificationExt.GET_QUESTION_TOP_ANSWER_SUCCESS:
                this.getQuestionTopAnswerSuccess(data[0].body);
                break;
        }
    }
    this.getQuestionTopAnswerSuccess = function (data) {
        if (data.questionType != this.nowSelect) {
            return;
        }
        $("#questionTop").empty();
        if (data.questionList != undefined) {
            var html = document.createElement("div");
            var htmlBody = '<table class="pure-table pure-table-bordered">' +
                '<thead>' +
                '<tr>' +
                '<th>排名</th>' +
                '<th>第几题</th>' +
                '<th>答案</th>' +
                '<th>数量</th>' +
                '<th>相关人员</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>';
            for (var i = 0; i < data.questionList.length; i++) {
                var question = data.questionList[i];
                htmlBody += '<tr>' +
                    '<td>' + (i + 1) + '</td>' +
                    '<td>' + question.questionNum + '</td>' +
                    '<td>' + this.mapQuestion[this.nowSelect][question.questionNum][question.answer] + '</td>' +
                    '<td>' + question.answerNum + '</td><td>';
                if (question.inputList != null) {
                    for (var j = 0; j < question.inputList.length; j++) {
                        var input = question.inputList[j];
                        htmlBody += input.input1 + '（' + input.input2 + ')' + "，";
                    }
                }

                htmlBody += '</td></tr>';
            }
            htmlBody += '</tbody>';
            htmlBody += '</table>';
            html.innerHTML = htmlBody;
            html = $(html);
        }
        $("#questionTop").append(html);
    }

    this.getQuestionAnswerSuccess = function (data) {
        if (data.questionType != this.nowSelect || data.questionNum != this.nowSelectNum) {
            return;
        }
        $("#questionChart").empty();
        $("#questionOther").empty();
        if (data.answer == undefined) {
            $("#questionChart")[0].innerHTML = "<span>此问题暂无数据，选其他问题看看</span>";
            return;
        }
        if (data.otherAnswer != undefined) {
            for (var i = 0; i < data.otherAnswer.length; i++) {
                var other = data.otherAnswer[i];
                var html = document.createElement("div");
                html.innerHTML = (i + 1) + "、" + other;
                $("#questionOther").append($(html));
            }
        }
        $("#questionChart")[0].innerHTML = '<div id="canvas-holder" class="canvas-container">' +
            '<canvas id="chart-area" class="canvas-self"/>' +
            '</div>';
        var array = new Array();
        var arrayName = new Array();
        if (data.answer.length > 0) {
            array.push("#7a0000");
        }
        if (data.answer.length > 1) {
            array.push("#991b00");
        }
        if (data.answer.length > 2) {
            array.push("#b93600");
        }
        if (data.answer.length > 3) {
            array.push("#d75000");
        }
        if (data.answer.length > 4) {
            array.push("#f56a00");
        }
        if (data.answer.length > 5) {
            array.push("#f78e3d");
        }
        if (data.answer.length > 6) {
            array.push("#faaf76");
        }
        if (data.answer.length > 7) {
            array.push("#fccca7");
        }
        if (data.answer.length > 8) {
            array.push("#fde3cf");
        }
        if (data.answer.length > 9) {
            array.push("#fef3eb");
        }
        var arrayLable = new Array();
        for (var i = 0; i < data.answer.length; i++) {
            var lable = data.answer[i];
            arrayLable.push(this.mapQuestion[this.nowSelect][this.nowSelectNum][lable]);
        }
        var config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: data.answerNum,
                    backgroundColor: array,
                    label: 'Dataset 1'
                }],
                labels: arrayLable
            },
            options: {
                responsive: true
            }
        };
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx, config);

    }
    this.getQuestionTypeSuccess = function (data) {
        if (data.questionType == undefined) {
            return;
        }

        for (var i = 0; i < data.questionType.length; i++) {
            var questionType = data.questionType[i];
            var view = this.createQuestionTypeView(questionType);
            $("#questionType").append(view);
            if (i == 0) {
                this.nowSelect = questionType;
                view.addClass("questionSelect");
            }
        }
        $T.countMediator.showNowSelect();
    }
    this.createQuestionTypeView = function (questionType) {
        var html = document.createElement("div");
        html.innerHTML = '<button class="pure-button pure-button-li"><span>' + questionType + '</span></button>';
        html.id = questionType;
        html = $(html);
        html.addClass("pure-u-1 pure-u-md-1-3 pure-u-lg-1-6");
        return html;
    }
}
$T.countMediator = new CountMediator();