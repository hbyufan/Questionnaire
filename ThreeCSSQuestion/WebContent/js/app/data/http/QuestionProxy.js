function QuestionProxy() {
    this.NAME = "QuestionProxy";
    this.questionAnswer = function (questionList, questionOtherList, inputList, textAreaList, questionId) {
        var data = {
            "hOpCode": 1,
            "questionList": questionList,
            "questionOtherList": questionOtherList,
            "inputList": inputList,
            "textAreaList": textAreaList,
            "questionId": questionId
        };

        var sendParam = new SendParam();
        sendParam.successHandle = this.questionAnswerSuccess;
        sendParam.failHandle = this.questionAnswerFail;
        sendParam.object = this;
        sendParam.data = data;
        sendParam.url = $T.url.url;
        $T.httpUtil.send(sendParam);
    }
    this.questionAnswerSuccess = function (result, sendParam) {
        alert("感谢你的回答");
        window.location.href="index.html";
    }
    this.questionAnswerFail = function (result, sendParam) {
        alert("提交失败");
    }
}
$T.questionProxy = new QuestionProxy();