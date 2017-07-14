package service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import action.QuestionAction;
import dao.model.base.QuestionNaire;
import http.HOpCodeQuestionNaire;
import http.HSession;
import http.HttpPacket;
import http.IHttpListener;
import http.exception.HttpErrorException;
import protobuf.http.QuestionAnswer.GetQuestionAnswerC;
import protobuf.http.QuestionAnswer.GetQuestionAnswerS;
import protobuf.http.QuestionAnswer.GetQuestionTypeC;
import protobuf.http.QuestionAnswer.GetQuestionTypeS;
import protobuf.http.QuestionAnswer.QuestionAnswerC;
import protobuf.http.QuestionAnswer.QuestionAnswerS;
import tool.StringUtil;

public class QuestionService implements IHttpListener {

	@Override
	public Map<Integer, String> getHttps() throws Exception {
		HashMap<Integer, String> map = new HashMap<>();
		map.put(HOpCodeQuestionNaire.QUESTION_ANSWER, "questionAnswerHandle");
		map.put(HOpCodeQuestionNaire.GET_QUESTION_TYPE, "getQuestionType");
		map.put(HOpCodeQuestionNaire.GET_QUESTION_ANSWER, "getQuestionAnswer");
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

	public HttpPacket getQuestionType(HSession hSession) throws HttpErrorException {
		GetQuestionTypeC message = (GetQuestionTypeC) hSession.httpPacket.getData();
		List<QuestionNaire> list = QuestionAction.getQuestionTypeList();
		if (list == null) {
			return null;
		}
		GetQuestionTypeS.Builder builder = GetQuestionTypeS.newBuilder();
		builder.setHOpCode(hSession.headParam.hOpCode);
		for (int i = 0; i < list.size(); i++) {
			QuestionNaire questionNaire = list.get(i);
			builder.addQuestionType(questionNaire.getQuestionId());
		}
		HttpPacket packet = new HttpPacket(hSession.headParam.hOpCode, builder.build());
		return packet;
	}

	public HttpPacket getQuestionAnswer(HSession hSession) throws HttpErrorException {
		GetQuestionAnswerC message = (GetQuestionAnswerC) hSession.httpPacket.getData();
		List<QuestionNaire> list = QuestionAction.getQuestionAnswer(message.getQuestionType(), message.getQuestionNum());
		if (list == null) {
			return null;
		}
		GetQuestionAnswerS.Builder builder = GetQuestionAnswerS.newBuilder();
		builder.setHOpCode(hSession.headParam.hOpCode);
		Map<String, Integer> map = new HashMap<>();
		for (int i = 0; i < list.size(); i++) {
			QuestionNaire questionNaire = list.get(i);
			String questionStr = null;
			String otherAnswer = null;
			if (message.getQuestionNum() == 1) {
				questionStr = questionNaire.getQuestion1();
				otherAnswer = questionNaire.getQuestion1Other();
			} else if (message.getQuestionNum() == 2) {
				questionStr = questionNaire.getQuestion2();
				otherAnswer = questionNaire.getQuestion2Other();
			} else if (message.getQuestionNum() == 3) {
				questionStr = questionNaire.getQuestion3();
				otherAnswer = questionNaire.getQuestion3Other();
			} else if (message.getQuestionNum() == 4) {
				questionStr = questionNaire.getQuestion4();
				otherAnswer = questionNaire.getQuestion4Other();
			} else if (message.getQuestionNum() == 5) {
				questionStr = questionNaire.getQuestion5();
				otherAnswer = questionNaire.getQuestion5Other();
			} else if (message.getQuestionNum() == 6) {
				questionStr = questionNaire.getQuestion6();
				otherAnswer = questionNaire.getQuestion6Other();
			} else if (message.getQuestionNum() == 7) {
				questionStr = questionNaire.getQuestion7();
				otherAnswer = questionNaire.getQuestion7Other();
			} else if (message.getQuestionNum() == 8) {
				questionStr = questionNaire.getQuestion8();
				otherAnswer = questionNaire.getQuestion8Other();
			} else if (message.getQuestionNum() == 9) {
				questionStr = questionNaire.getQuestion9();
				otherAnswer = questionNaire.getQuestion9Other();
			} else if (message.getQuestionNum() == 10) {
				questionStr = questionNaire.getQuestion10();
				otherAnswer = questionNaire.getQuestion10Other();
			} else if (message.getQuestionNum() == 11) {
				questionStr = questionNaire.getQuestion11();
				otherAnswer = questionNaire.getQuestion11Other();
			} else if (message.getQuestionNum() == 12) {
				questionStr = questionNaire.getQuestion12();
				otherAnswer = questionNaire.getQuestion12Other();
			} else if (message.getQuestionNum() == 13) {
				questionStr = questionNaire.getQuestion13();
				otherAnswer = questionNaire.getQuestion13Other();
			} else if (message.getQuestionNum() == 14) {
				questionStr = questionNaire.getQuestion14();
				otherAnswer = questionNaire.getQuestion14Other();
			}

			if (!StringUtil.stringIsNull(questionStr)) {
				String[] questionArray = questionStr.split(",");
				for (int j = 0; j < questionArray.length; j++) {
					String answer = questionArray[j];
					if (!StringUtil.stringIsNull(answer)) {
						if (!map.containsKey(answer)) {
							map.put(answer, 1);
						} else {
							map.put(answer, map.get(answer) + 1);
						}
					}
				}
			}
			if (!StringUtil.stringIsNull(otherAnswer)) {
				builder.addOtherAnswer(otherAnswer);
			}
		}
		Object[] keyArray = map.keySet().toArray();
		for (int i = 0; i < keyArray.length; i++) {
			String key = String.valueOf(keyArray[i]);
			int answerNum = map.get(key);
			builder.addAnswer(key);
			builder.addAnswerNum(answerNum);
		}
		builder.setQuestionType(message.getQuestionType());
		builder.setQuestionNum(message.getQuestionNum());
		HttpPacket packet = new HttpPacket(hSession.headParam.hOpCode, builder.build());
		return packet;
	}
}
