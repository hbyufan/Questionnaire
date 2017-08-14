function SpeakMediator() {
    this.questionId = "speakQuestion"
    this.init = function (view) {
        document.getElementById("speak_submit").addEventListener("click", this.onSubmit);
    }
    // 注销方法
    this.dispose = function () {

    }
    // 关心消息数组
    this.listNotificationInterests = [];
    // 关心的消息处理
    this.handleNotification = function (data) {

    }
    this.onSubmit = function () {
        var questionList = new Array();
        var questionOtherList = new Array();
        var questionOne = $T.speakMediator.getOneCheckBox();
        if (questionOne.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionOne.question);
        }
        if (questionOne.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionOne.questionOther);
        }

        var questionTwo = $T.speakMediator.getTwoCheckBox();
        if (questionTwo.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionTwo.question);
        }
        if (questionTwo.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionTwo.questionOther);
        }

        var questionThree = $T.speakMediator.getThreeCheckBox();
        if (questionThree.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionThree.question);
        }
        if (questionThree.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionThree.questionOther);
        }

        var questionFour = $T.speakMediator.getFourCheckBox();
        if (questionFour.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionFour.question);
        }
        if (questionFour.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionFour.questionOther);
        }

        var questionFive = $T.speakMediator.getFiveCheckBox();
        if (questionFive.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionFive.question);
        }
        if (questionFive.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionFive.questionOther);
        }

        var questionSix = $T.speakMediator.getSixCheckBox();
        if (questionSix.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionSix.question);
        }
        if (questionSix.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionSix.questionOther);
        }

        var questionSeven = $T.speakMediator.getSevenCheckBox();
        if (questionSeven.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionSeven.question);
        }
        if (questionSeven.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionSeven.questionOther);
        }

        var questionEight = $T.speakMediator.getEightCheckBox();
        if (questionEight.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionEight.question);
        }
        if (questionEight.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionEight.questionOther);
        }

        var questionNine = $T.speakMediator.getNineCheckBox();
        if (questionNine.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionNine.question);
        }
        if (questionNine.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionNine.questionOther);
        }

        var questionTen = $T.speakMediator.getTenCheckBox();
        if (questionTen.question == "") {
            questionList.push("");
        } else {
            questionList.push(questionTen.question);
        }
        if (questionTen.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(questionTen.questionOther);
        }

        var question11 = $T.speakMediator.get11CheckBox();
        if (question11.question == "") {
            questionList.push("");
        } else {
            questionList.push(question11.question);
        }
        if (question11.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(question11.questionOther);
        }

        var question12 = $T.speakMediator.get12CheckBox();
        if (question12.question == "") {
            questionList.push("");
        } else {
            questionList.push(question12.question);
        }
        if (question12.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(question12.questionOther);
        }

        var question13 = $T.speakMediator.get13CheckBox();
        if (question13.question == "") {
            questionList.push("");
        } else {
            questionList.push(question13.question);
        }
        if (question13.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(question13.questionOther);
        }

        var question14 = $T.speakMediator.get14CheckBox();
        if (question14.question == "") {
            questionList.push("");
        } else {
            questionList.push(question14.question);
        }
        if (question14.questionOther == "") {
            questionOtherList.push("");
        } else {
            questionOtherList.push(question14.questionOther);
        }

        var inputList = new Array();
        var username = document.getElementById("username").value;
        var postArray = document.getElementsByName("optionsRadios");
        if (username == "") {
            inputList.push("");
        } else {
            inputList.push(username);
        }
        var selectPost;
        for (var i = 0; i < postArray.length; i++) {
            var post = postArray[i];
            if (post.checked) {
                selectPost = post;
                break;
            }
        }
        inputList.push(selectPost.value);
        var textAreaList = new Array();
        var other = document.getElementById("other").value;
        if (other == "") {
            textAreaList.push("");
        } else {
            textAreaList.push(other);
        }
        $T.questionProxy.questionAnswer(questionList, questionOtherList, inputList, textAreaList, $T.speakMediator.questionId);
    }
    this.getOneCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option-one1").checked) {
            str += document.getElementById("option-one1").value + ",";
        }
        if (document.getElementById("option-one2").checked) {
            str += document.getElementById("option-one2").value + ",";
        }
        if (document.getElementById("option-one3").checked) {
            str += document.getElementById("option-one3").value + ",";
        }
        if (document.getElementById("option-one4").checked) {
            str += document.getElementById("option-one4").value + ",";
        }
        if (document.getElementById("option-one5").checked) {
            str += document.getElementById("option-one5").value + ",";
        }
        if (document.getElementById("option-one6").checked) {
            str += document.getElementById("option-one6").value + ",";
            strOther += document.getElementById("option-one6-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getTwoCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option-two1").checked) {
            str += document.getElementById("option-two1").value + ",";
        }
        if (document.getElementById("option-two2").checked) {
            str += document.getElementById("option-two2").value + ",";
        }
        if (document.getElementById("option-two3").checked) {
            str += document.getElementById("option-two3").value + ",";
        }
        if (document.getElementById("option-two4").checked) {
            str += document.getElementById("option-two4").value + ",";
        }
        if (document.getElementById("option-two5").checked) {
            str += document.getElementById("option-two5").value + ",";
        }
        if (document.getElementById("option-two6").checked) {
            str += document.getElementById("option-two6").value + ",";
        }
        if (document.getElementById("option-two7").checked) {
            str += document.getElementById("option-two7").value + ",";
        }
        if (document.getElementById("option-two8").checked) {
            str += document.getElementById("option-two8").value + ",";
        }
        if (document.getElementById("option-two9").checked) {
            str += document.getElementById("option-two9").value + ",";
        }
        if (document.getElementById("option-two10").checked) {
            str += document.getElementById("option-two10").value + ",";
            strOther += document.getElementById("option-two10-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getThreeCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option-three1").checked) {
            str += document.getElementById("option-three1").value + ",";
        }
        if (document.getElementById("option-three2").checked) {
            str += document.getElementById("option-three2").value + ",";
        }
        if (document.getElementById("option-three3").checked) {
            str += document.getElementById("option-three3").value + ",";
        }
        if (document.getElementById("option-three4").checked) {
            str += document.getElementById("option-three4").value + ",";
        }
        if (document.getElementById("option-three5").checked) {
            str += document.getElementById("option-three5").value + ",";
        }
        if (document.getElementById("option-three6").checked) {
            str += document.getElementById("option-three6").value + ",";
        }
        if (document.getElementById("option-three7").checked) {
            str += document.getElementById("option-three7").value + ",";
            strOther += document.getElementById("option-three7-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getFourCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option-four1").checked) {
            str += document.getElementById("option-four1").value + ",";
        }
        if (document.getElementById("option-four2").checked) {
            str += document.getElementById("option-four2").value + ",";
        }
        if (document.getElementById("option-four3").checked) {
            str += document.getElementById("option-four3").value + ",";
        }
        if (document.getElementById("option-four4").checked) {
            str += document.getElementById("option-four4").value + ",";
        }
        if (document.getElementById("option-four5").checked) {
            str += document.getElementById("option-four5").value + ",";
            strOther += document.getElementById("option-four5-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getFiveCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option-five1").checked) {
            str += document.getElementById("option-five1").value + ",";
        }
        if (document.getElementById("option-five2").checked) {
            str += document.getElementById("option-five2").value + ",";
        }
        if (document.getElementById("option-five3").checked) {
            str += document.getElementById("option-five3").value + ",";
        }
        if (document.getElementById("option-five4").checked) {
            str += document.getElementById("option-five4").value + ",";
        }
        if (document.getElementById("option-five5").checked) {
            str += document.getElementById("option-five5").value + ",";
        }
        if (document.getElementById("option-five6").checked) {
            str += document.getElementById("option-five6").value + ",";
            strOther += document.getElementById("option-five6-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getSixCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-one1").checked) {
            str += document.getElementById("option1-one1").value + ",";
        }
        if (document.getElementById("option1-one2").checked) {
            str += document.getElementById("option1-one2").value + ",";
        }
        if (document.getElementById("option1-one3").checked) {
            str += document.getElementById("option1-one3").value + ",";
        }
        if (document.getElementById("option1-one4").checked) {
            str += document.getElementById("option1-one4").value + ",";
        }
        if (document.getElementById("option1-one5").checked) {
            str += document.getElementById("option1-one5").value + ",";
        }
        if (document.getElementById("option1-one6").checked) {
            str += document.getElementById("option1-one6").value + ",";
        }
        if (document.getElementById("option1-one7").checked) {
            str += document.getElementById("option1-one7").value + ",";
        }
        if (document.getElementById("option1-one8").checked) {
            str += document.getElementById("option1-one8").value + ",";
        }
        if (document.getElementById("option1-one9").checked) {
            str += document.getElementById("option1-one9").value + ",";
        }
        if (document.getElementById("option1-one10").checked) {
            str += document.getElementById("option1-one10").value + ",";
            strOther += document.getElementById("option1-one10-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getSevenCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-two1").checked) {
            str += document.getElementById("option1-two1").value + ",";
        }
        if (document.getElementById("option1-two2").checked) {
            str += document.getElementById("option1-two2").value + ",";
        }
        if (document.getElementById("option1-two3").checked) {
            str += document.getElementById("option1-two3").value + ",";
        }
        if (document.getElementById("option1-two4").checked) {
            str += document.getElementById("option1-two4").value + ",";
        }
        if (document.getElementById("option1-two5").checked) {
            str += document.getElementById("option1-two5").value + ",";
        }
        if (document.getElementById("option1-two6").checked) {
            str += document.getElementById("option1-two6").value + ",";
        }
        if (document.getElementById("option1-two7").checked) {
            str += document.getElementById("option1-two7").value + ",";
            strOther += document.getElementById("option1-two7-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getEightCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-three1").checked) {
            str += document.getElementById("option1-three1").value + ",";
        }
        if (document.getElementById("option1-three2").checked) {
            str += document.getElementById("option1-three2").value + ",";
        }
        if (document.getElementById("option1-three3").checked) {
            str += document.getElementById("option1-three3").value + ",";
        }
        if (document.getElementById("option1-three4").checked) {
            str += document.getElementById("option1-three4").value + ",";
        }
        if (document.getElementById("option1-three5").checked) {
            str += document.getElementById("option1-three5").value + ",";
        }
        if (document.getElementById("option1-three6").checked) {
            str += document.getElementById("option1-three6").value + ",";
            strOther += document.getElementById("option1-three6-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getNineCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-four1").checked) {
            str += document.getElementById("option1-four1").value + ",";
        }
        if (document.getElementById("option1-four2").checked) {
            str += document.getElementById("option1-four2").value + ",";
        }
        if (document.getElementById("option1-four3").checked) {
            str += document.getElementById("option1-four3").value + ",";
            strOther += document.getElementById("option1-four3-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.getTenCheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-five1").checked) {
            str += document.getElementById("option1-five1").value + ",";
        }
        if (document.getElementById("option1-five2").checked) {
            str += document.getElementById("option1-five2").value + ",";
        }
        if (document.getElementById("option1-five3").checked) {
            str += document.getElementById("option1-five3").value + ",";
        }
        if (document.getElementById("option1-five4").checked) {
            str += document.getElementById("option1-five4").value + ",";
            strOther += document.getElementById("option1-five4-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.get11CheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-six1").checked) {
            str += document.getElementById("option1-six1").value + ",";
        }
        if (document.getElementById("option1-six2").checked) {
            str += document.getElementById("option1-six2").value + ",";
        }
        if (document.getElementById("option1-six3").checked) {
            str += document.getElementById("option1-six3").value + ",";
        }
        if (document.getElementById("option1-six4").checked) {
            str += document.getElementById("option1-six4").value + ",";
        }
        if (document.getElementById("option1-six5").checked) {
            str += document.getElementById("option1-six5").value + ",";
            strOther += document.getElementById("option1-six5-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.get12CheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-seven1").checked) {
            str += document.getElementById("option1-seven1").value + ",";
        }
        if (document.getElementById("option1-seven2").checked) {
            str += document.getElementById("option1-seven2").value + ",";
        }
        if (document.getElementById("option1-seven3").checked) {
            str += document.getElementById("option1-seven3").value + ",";
            strOther += document.getElementById("option1-seven3-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.get13CheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-eight1").checked) {
            str += document.getElementById("option1-eight1").value + ",";
        }
        if (document.getElementById("option1-eight2").checked) {
            str += document.getElementById("option1-eight2").value + ",";
        }
        if (document.getElementById("option1-eight3").checked) {
            str += document.getElementById("option1-eight3").value + ",";
        }
        if (document.getElementById("option1-eight4").checked) {
            str += document.getElementById("option1-eight4").value + ",";
        }
        if (document.getElementById("option1-eight5").checked) {
            str += document.getElementById("option1-eight5").value + ",";
            strOther += document.getElementById("option1-eight5-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
    this.get14CheckBox = function () {
        var str = "";
        var strOther = "";
        if (document.getElementById("option1-nine1").checked) {
            str += document.getElementById("option1-nine1").value + ",";
        }
        if (document.getElementById("option1-nine2").checked) {
            str += document.getElementById("option1-nine2").value + ",";
        }
        if (document.getElementById("option1-nine3").checked) {
            str += document.getElementById("option1-nine3").value + ",";
        }
        if (document.getElementById("option1-nine4").checked) {
            str += document.getElementById("option1-nine4").value + ",";
            strOther += document.getElementById("option1-nine4-input").value;
        }
        return {"question": str, "questionOther": strOther};
    }
}
$T.speakMediator = new SpeakMediator();