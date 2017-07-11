package http;

import protobuf.http.QuestionAnswer.QuestionAnswerC;
import protobuf.http.QuestionAnswer.QuestionAnswerS;

public class HOpCodeQuestionNaire extends HOpCode {
	public static int QUESTION_ANSWER = 1;

	public static void init() {

		Class<?>[] sendAndReturn = new Class[2];
		sendAndReturn[0] = QuestionAnswerC.class;
		sendAndReturn[1] = QuestionAnswerS.class;
		hOpCodeMap.put(QUESTION_ANSWER, sendAndReturn);

	}
}
