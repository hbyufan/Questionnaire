package service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.grain.httpserver.HttpException;
import org.grain.httpserver.HttpPacket;
import org.grain.httpserver.IHttpListener;

import action.QuestionAction;
import dao.model.base.QuestionNaire;
import http.HOpCodeQuestionNaire;
import protobuf.http.QuestionAnswer.GetQuestionAnswerC;
import protobuf.http.QuestionAnswer.GetQuestionAnswerS;
import protobuf.http.QuestionAnswer.GetQuestionTopAnswerC;
import protobuf.http.QuestionAnswer.GetQuestionTopAnswerS;
import protobuf.http.QuestionAnswer.GetQuestionTypeC;
import protobuf.http.QuestionAnswer.GetQuestionTypeS;
import protobuf.http.QuestionAnswer.QuestionAnswerC;
import protobuf.http.QuestionAnswer.QuestionAnswerData;
import protobuf.http.QuestionAnswer.QuestionAnswerS;
import protobuf.http.QuestionAnswer.QuestionInput;
import tool.StringUtil;

public class QuestionService implements IHttpListener {

	@Override
	public Map<String, String> getHttps() {
		HashMap<String, String> map = new HashMap<>();
		map.put(HOpCodeQuestionNaire.QUESTION_ANSWER, "questionAnswerHandle");
		map.put(HOpCodeQuestionNaire.GET_QUESTION_TYPE, "getQuestionType");
		map.put(HOpCodeQuestionNaire.GET_QUESTION_ANSWER, "getQuestionAnswer");
		map.put(HOpCodeQuestionNaire.GET_QUESTION_TOP_ANSWER, "getQuestionTopAnswerHandle");
		return map;
	}

	public HttpPacket questionAnswerHandle(HttpPacket httpPacket) throws HttpException {
		QuestionAnswerC message = (QuestionAnswerC) httpPacket.getData();
		QuestionNaire questionNaire = QuestionAction.createQuestionNaire(message.getQuestionListList(), message.getQuestionOtherListList(), message.getInputListList(), message.getTextAreaListList(), message.getQuestionId());
		if (questionNaire == null) {
			return null;
		}
		QuestionAnswerS.Builder builder = QuestionAnswerS.newBuilder();
		builder.setHOpCode(httpPacket.hSession.headParam.hOpCode);
		HttpPacket packet = new HttpPacket(httpPacket.hSession.headParam.hOpCode, builder.build());
		return packet;
	}

	public HttpPacket getQuestionType(HttpPacket httpPacket) throws HttpException {
		GetQuestionTypeC message = (GetQuestionTypeC) httpPacket.getData();
		List<QuestionNaire> list = QuestionAction.getQuestionTypeList();
		if (list == null) {
			return null;
		}
		GetQuestionTypeS.Builder builder = GetQuestionTypeS.newBuilder();
		builder.setHOpCode(httpPacket.hSession.headParam.hOpCode);
		for (int i = 0; i < list.size(); i++) {
			QuestionNaire questionNaire = list.get(i);
			builder.addQuestionType(questionNaire.getQuestionId());
		}
		HttpPacket packet = new HttpPacket(httpPacket.hSession.headParam.hOpCode, builder.build());
		return packet;
	}

	public HttpPacket getQuestionAnswer(HttpPacket httpPacket) throws HttpException {
		GetQuestionAnswerC message = (GetQuestionAnswerC) httpPacket.getData();
		List<QuestionNaire> list = QuestionAction.getQuestionAnswer(message.getQuestionType(), message.getQuestionNum());
		if (list == null) {
			return null;
		}
		GetQuestionAnswerS.Builder builder = GetQuestionAnswerS.newBuilder();
		builder.setHOpCode(httpPacket.hSession.headParam.hOpCode);
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
		HttpPacket packet = new HttpPacket(httpPacket.hSession.headParam.hOpCode, builder.build());
		return packet;
	}

	public HttpPacket getQuestionTopAnswerHandle(HttpPacket httpPacket) throws HttpException {
		GetQuestionTopAnswerC message = (GetQuestionTopAnswerC) httpPacket.getData();
		List<QuestionNaire> list = QuestionAction.getQuestionAnswer(message.getQuestionType(), 0);
		if (list == null) {
			return null;
		}
		Map<String, QuestionData> map = new HashMap<>();
		for (int i = 1; i <= 14; i++) {
			for (int j = 0; j < list.size(); j++) {
				QuestionNaire questionNaire = list.get(j);
				String questionStr = null;
				if (i == 1) {
					questionStr = questionNaire.getQuestion1();
				} else if (i == 2) {
					questionStr = questionNaire.getQuestion2();
				} else if (i == 3) {
					questionStr = questionNaire.getQuestion3();
				} else if (i == 4) {
					questionStr = questionNaire.getQuestion4();
				} else if (i == 5) {
					questionStr = questionNaire.getQuestion5();
				} else if (i == 6) {
					questionStr = questionNaire.getQuestion6();
				} else if (i == 7) {
					questionStr = questionNaire.getQuestion7();
				} else if (i == 8) {
					questionStr = questionNaire.getQuestion8();
				} else if (i == 9) {
					questionStr = questionNaire.getQuestion9();
				} else if (i == 10) {
					questionStr = questionNaire.getQuestion10();
				} else if (i == 11) {
					questionStr = questionNaire.getQuestion11();
				} else if (i == 12) {
					questionStr = questionNaire.getQuestion12();
				} else if (i == 13) {
					questionStr = questionNaire.getQuestion13();
				} else if (i == 14) {
					questionStr = questionNaire.getQuestion14();
				}

				if (!StringUtil.stringIsNull(questionStr)) {
					String[] questionArray = questionStr.split(",");
					for (int m = 0; m < questionArray.length; m++) {
						String answer = questionArray[m];
						if (!StringUtil.stringIsNull(answer)) {
							if (!map.containsKey(i + "_" + answer)) {
								QuestionData questionData = new QuestionData();
								questionData.questionNum = i;
								questionData.answer = answer;
								questionData.answerNum = 1;
								questionData.input1List.add(questionNaire.getInput1());
								questionData.input2List.add(questionNaire.getInput2());
								map.put(i + "_" + answer, questionData);
							} else {
								QuestionData questionData = map.get(i + "_" + answer);
								questionData.answerNum++;
								questionData.input1List.add(questionNaire.getInput1());
								questionData.input2List.add(questionNaire.getInput2());
							}
						}
					}
				}
			}
		}
		ArrayList<QuestionData> array = new ArrayList<>();
		Object[] keyArray = map.keySet().toArray();
		for (int i = 0; i < keyArray.length; i++) {
			String key = String.valueOf(keyArray[i]);
			array.add(map.get(key));
		}
		for (int i = 0; i < array.size(); i++) {
			for (int j = i + 1; j < array.size(); j++) {
				QuestionData questionData = array.get(i);
				QuestionData questionData1 = array.get(j);
				if (questionData1.answerNum > questionData.answerNum) {
					array.set(i, questionData1);
					array.set(j, questionData);
				}
			}
		}
		GetQuestionTopAnswerS.Builder builder = GetQuestionTopAnswerS.newBuilder();
		builder.setHOpCode(httpPacket.hSession.headParam.hOpCode);
		int num = message.getNum();
		if (num > array.size()) {
			num = array.size();
		}
		for (int i = 0; i < num; i++) {
			QuestionData question = array.get(i);
			QuestionAnswerData.Builder builderData = QuestionAnswerData.newBuilder();
			builderData.setAnswer(question.answer);
			builderData.setAnswerNum(question.answerNum);
			builderData.setQuestionNum(question.questionNum);
			for (int j = 0; j < question.input1List.size(); j++) {
				String input1 = question.input1List.get(j);
				String input2 = question.input2List.get(j);
				QuestionInput.Builder inputBuild = QuestionInput.newBuilder();
				if (StringUtil.stringIsNull(input1)) {
					inputBuild.setInput1("null");
				} else {
					inputBuild.setInput1(input1);
				}
				inputBuild.setInput2(input2);
				builderData.addInputList(inputBuild);
			}
			builder.addQuestionList(builderData);
		}
		builder.setQuestionType(message.getQuestionType());
		HttpPacket packet = new HttpPacket(httpPacket.hSession.headParam.hOpCode, builder.build());
		return packet;
	}
}
