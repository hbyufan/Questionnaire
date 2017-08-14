function QuestionProxy() {
    this.NAME = "QuestionProxy";
    this.questionType;
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
        window.location.href = "index.html";
    }
    this.questionAnswerFail = function (result, sendParam) {
        alert("提交失败");
    }
    this.getQuestionType = function () {
        var data = {
            "hOpCode": 2
        };

        var sendParam = new SendParam();
        sendParam.successHandle = this.getQuestionTypeSuccess;
        sendParam.failHandle = this.getQuestionTypeFail;
        sendParam.object = this;
        sendParam.data = data;
        sendParam.url = $T.url.url;
        $T.httpUtil.send(sendParam);
    }
    this.getQuestionTypeSuccess = function (result, sendParam) {
        this.questionType = result.questionType
        $T.viewManager.notifyObservers($T.viewManager.getNotification($T.notificationExt.GET_QUESTION_TYPE_SUCCESS, result));
    }
    this.getQuestionTypeFail = function (result, sendParam) {

    }
    this.getQuestionAnswer = function (questionType, questionNum) {
        var data = {
            "hOpCode": 3,
            "questionType": questionType,
            "questionNum": questionNum
        };

        var sendParam = new SendParam();
        sendParam.successHandle = this.getQuestionAnswerSuccess;
        sendParam.failHandle = this.getQuestionAnswerFail;
        sendParam.object = this;
        sendParam.data = data;
        sendParam.url = $T.url.url;
        $T.httpUtil.send(sendParam);
    }
    this.getQuestionAnswerSuccess = function (result, sendParam) {
        $T.viewManager.notifyObservers($T.viewManager.getNotification($T.notificationExt.GET_QUESTION_ANSWER_SUCCESS, result));
    }
    this.getQuestionAnswerFail = function (result, sendParam) {

    }
    this.getQuestionTopAnswer = function (questionType) {
        var data = {
            "hOpCode": 4,
            "questionType": questionType,
            "num": 10
        };

        var sendParam = new SendParam();
        sendParam.successHandle = this.getQuestionTopAnswerSuccess;
        sendParam.failHandle = this.getQuestionTopAnswerFail;
        sendParam.object = this;
        sendParam.data = data;
        sendParam.url = $T.url.url;
        $T.httpUtil.send(sendParam);
    }
    this.getQuestionTopAnswerSuccess = function (result, sendParam) {
        $T.viewManager.notifyObservers($T.viewManager.getNotification($T.notificationExt.GET_QUESTION_TOP_ANSWER_SUCCESS, result));
    }
    this.getQuestionTopAnswerFail = function (result, sendParam) {

    }
}
$T.questionProxy = new QuestionProxy();