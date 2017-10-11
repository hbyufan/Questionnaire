package http;

import org.grain.httpserver.HttpManager;

import protobuf.http.QuestionAnswer.GetQuestionAnswerC;
import protobuf.http.QuestionAnswer.GetQuestionAnswerS;
import protobuf.http.QuestionAnswer.GetQuestionTopAnswerC;
import protobuf.http.QuestionAnswer.GetQuestionTopAnswerS;
import protobuf.http.QuestionAnswer.GetQuestionTypeC;
import protobuf.http.QuestionAnswer.GetQuestionTypeS;
import protobuf.http.QuestionAnswer.QuestionAnswerC;
import protobuf.http.QuestionAnswer.QuestionAnswerS;

public class HOpCodeQuestionNaire {
	public static String QUESTION_ANSWER = "1";

	public static String GET_QUESTION_TYPE = "2";

	public static String GET_QUESTION_ANSWER = "3";

	public static String GET_QUESTION_TOP_ANSWER = "4";

	public static void init() {

		HttpManager.addMapping(QUESTION_ANSWER, QuestionAnswerC.class, QuestionAnswerS.class);
		HttpManager.addMapping(GET_QUESTION_TYPE, GetQuestionTypeC.class, GetQuestionTypeS.class);
		HttpManager.addMapping(GET_QUESTION_ANSWER, GetQuestionAnswerC.class, GetQuestionAnswerS.class);
		HttpManager.addMapping(GET_QUESTION_TOP_ANSWER, GetQuestionTopAnswerC.class, GetQuestionTopAnswerS.class);

	}
}
