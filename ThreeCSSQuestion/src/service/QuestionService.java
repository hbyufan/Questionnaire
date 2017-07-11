package service;

import java.util.HashMap;
import java.util.Map;

import action.QuestionAction;
import dao.model.base.QuestionNaire;
import http.HOpCodeQuestionNaire;
import http.HSession;
import http.HttpPacket;
import http.IHttpListener;
import http.exception.HttpErrorException;
import protobuf.http.QuestionAnswer.QuestionAnswerC;
import protobuf.http.QuestionAnswer.QuestionAnswerS;

public class QuestionService implements IHttpListener {

	@Override
	public Map<Integer, String> getHttps() throws Exception {
		HashMap<Integer, String> map = new HashMap<>();
		map.put(HOpCodeQuestionNaire.QUESTION_ANSWER, "questionAnswerHandle");
		return map;
	}

	@Override
	public Object getInstance() {
		return this;
	}

	public HttpPacket questionAnswerHandle(HSession hSession) throws HttpErrorException {
		QuestionAnswerC message = (QuestionAnswerC) hSession.httpPacket.getData();
		QuestionNaire questionNaire = QuestionAction.createQuestionNaire(message.getQuestionListList(), message.getQuestionOtherListList(), message.getInputListList(), message.getTextAreaListList(), message.getQuestionId());
		if (questionNaire == null) {
			return null;
		}
		QuestionAnswerS.Builder builder = QuestionAnswerS.newBuilder();
		builder.setHOpCode(hSession.headParam.hOpCode);
		HttpPacket packet = new HttpPacket(hSession.headParam.hOpCode, builder.build());
		return packet;
	}
}
