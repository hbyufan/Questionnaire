package http;

import protobuf.http.QuestionAnswer.GetQuestionAnswerC;
import protobuf.http.QuestionAnswer.GetQuestionAnswerS;
import protobuf.http.QuestionAnswer.GetQuestionTopAnswerC;
import protobuf.http.QuestionAnswer.GetQuestionTopAnswerS;
import protobuf.http.QuestionAnswer.GetQuestionTypeC;
import protobuf.http.QuestionAnswer.GetQuestionTypeS;
import protobuf.http.QuestionAnswer.QuestionAnswerC;
import protobuf.http.QuestionAnswer.QuestionAnswerS;

public class HOpCodeQuestionNaire extends HOpCode {
	public static int QUESTION_ANSWER = 1;

	public static int GET_QUESTION_TYPE = 2;

	public static int GET_QUESTION_ANSWER = 3;

	public static int GET_QUESTION_TOP_ANSWER = 4;

	public static void init() {

		Class<?>[] sendAndReturn = new Class[2];
		sendAndReturn[0] = QuestionAnswerC.class;
		sendAndReturn[1] = QuestionAnswerS.class;
		hOpCodeMap.put(QUESTION_ANSWER, sendAndReturn);

		sendAndReturn = new Class[2];
		sendAndReturn[0] = GetQuestionTypeC.class;
		sendAndReturn[1] = GetQuestionTypeS.class;
		hOpCodeMap.put(GET_QUESTION_TYPE, sendAndReturn);

		sendAndReturn = new Class[2];
		sendAndReturn[0] = GetQuestionAnswerC.class;
		sendAndReturn[1] = GetQuestionAnswerS.class;
		hOpCodeMap.put(GET_QUESTION_ANSWER, sendAndReturn);

		sendAndReturn = new Class[2];
		sendAndReturn[0] = GetQuestionTopAnswerC.class;
		sendAndReturn[1] = GetQuestionTopAnswerS.class;
		hOpCodeMap.put(GET_QUESTION_TOP_ANSWER, sendAndReturn);

	}
}
