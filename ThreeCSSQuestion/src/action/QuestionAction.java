package action;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import dao.dao.base.QuestionNaireMapper;
import dao.model.base.QuestionNaire;
import log.LogManager;
import mbatis.MybatisManager;
import tool.StringUtil;
import util.IdUtil;

public class QuestionAction {
	public static QuestionNaire createQuestionNaire(List<String> questionList, List<String> questionOtherList, List<String> inputList, List<String> textAreaList, String questionId) {
		QuestionNaire questionNaire = new QuestionNaire();
		questionNaire.setId(IdUtil.getUuid());
		questionNaire.setCreateTime(new Date());
		questionNaire.setQuestionId(questionId);
		// 回答1-14
		if (questionList.size() > 0 && !StringUtil.stringIsNull(questionList.get(0))) {
			questionNaire.setQuestion1(questionList.get(0));
		}
		if (questionList.size() > 1 && !StringUtil.stringIsNull(questionList.get(1))) {
			questionNaire.setQuestion2(questionList.get(1));
		}
		if (questionList.size() > 2 && !StringUtil.stringIsNull(questionList.get(2))) {
			questionNaire.setQuestion3(questionList.get(2));
		}
		if (questionList.size() > 3 && !StringUtil.stringIsNull(questionList.get(3))) {
			questionNaire.setQuestion4(questionList.get(3));
		}
		if (questionList.size() > 4 && !StringUtil.stringIsNull(questionList.get(4))) {
			questionNaire.setQuestion5(questionList.get(4));
		}
		if (questionList.size() > 5 && !StringUtil.stringIsNull(questionList.get(5))) {
			questionNaire.setQuestion6(questionList.get(5));
		}
		if (questionList.size() > 6 && !StringUtil.stringIsNull(questionList.get(6))) {
			questionNaire.setQuestion7(questionList.get(6));
		}
		if (questionList.size() > 7 && !StringUtil.stringIsNull(questionList.get(7))) {
			questionNaire.setQuestion8(questionList.get(7));
		}
		if (questionList.size() > 8 && !StringUtil.stringIsNull(questionList.get(8))) {
			questionNaire.setQuestion9(questionList.get(8));
		}
		if (questionList.size() > 9 && !StringUtil.stringIsNull(questionList.get(9))) {
			questionNaire.setQuestion10(questionList.get(9));
		}
		if (questionList.size() > 10 && !StringUtil.stringIsNull(questionList.get(10))) {
			questionNaire.setQuestion11(questionList.get(10));
		}
		if (questionList.size() > 11 && !StringUtil.stringIsNull(questionList.get(11))) {
			questionNaire.setQuestion12(questionList.get(11));
		}
		if (questionList.size() > 12 && !StringUtil.stringIsNull(questionList.get(12))) {
			questionNaire.setQuestion13(questionList.get(12));
		}
		if (questionList.size() > 13 && !StringUtil.stringIsNull(questionList.get(13))) {
			questionNaire.setQuestion14(questionList.get(13));
		}
		// 回答补充1-14
		if (questionOtherList.size() > 0 && !StringUtil.stringIsNull(questionOtherList.get(0))) {
			questionNaire.setQuestion1Other(questionOtherList.get(0));
		}
		if (questionOtherList.size() > 1 && !StringUtil.stringIsNull(questionOtherList.get(1))) {
			questionNaire.setQuestion2Other(questionOtherList.get(1));
		}
		if (questionOtherList.size() > 2 && !StringUtil.stringIsNull(questionOtherList.get(2))) {
			questionNaire.setQuestion3Other(questionOtherList.get(2));
		}
		if (questionOtherList.size() > 3 && !StringUtil.stringIsNull(questionOtherList.get(3))) {
			questionNaire.setQuestion4Other(questionOtherList.get(3));
		}
		if (questionOtherList.size() > 4 && !StringUtil.stringIsNull(questionOtherList.get(4))) {
			questionNaire.setQuestion5Other(questionOtherList.get(4));
		}
		if (questionOtherList.size() > 5 && !StringUtil.stringIsNull(questionOtherList.get(5))) {
			questionNaire.setQuestion6Other(questionOtherList.get(5));
		}
		if (questionOtherList.size() > 6 && !StringUtil.stringIsNull(questionOtherList.get(6))) {
			questionNaire.setQuestion7Other(questionOtherList.get(6));
		}
		if (questionOtherList.size() > 7 && !StringUtil.stringIsNull(questionOtherList.get(7))) {
			questionNaire.setQuestion8Other(questionOtherList.get(7));
		}
		if (questionOtherList.size() > 8 && !StringUtil.stringIsNull(questionOtherList.get(8))) {
			questionNaire.setQuestion9Other(questionOtherList.get(8));
		}
		if (questionOtherList.size() > 9 && !StringUtil.stringIsNull(questionOtherList.get(9))) {
			questionNaire.setQuestion10Other(questionOtherList.get(9));
		}
		if (questionOtherList.size() > 10 && !StringUtil.stringIsNull(questionOtherList.get(10))) {
			questionNaire.setQuestion11Other(questionOtherList.get(10));
		}
		if (questionOtherList.size() > 11 && !StringUtil.stringIsNull(questionOtherList.get(11))) {
			questionNaire.setQuestion12Other(questionOtherList.get(11));
		}
		if (questionOtherList.size() > 12 && !StringUtil.stringIsNull(questionOtherList.get(12))) {
			questionNaire.setQuestion13Other(questionOtherList.get(12));
		}
		if (questionOtherList.size() > 13 && !StringUtil.stringIsNull(questionOtherList.get(13))) {
			questionNaire.setQuestion14Other(questionOtherList.get(13));
		}
		// 额外输入1-5
		if (inputList.size() > 0 && !StringUtil.stringIsNull(inputList.get(0))) {
			questionNaire.setInput1(inputList.get(0));
		}
		if (inputList.size() > 1 && !StringUtil.stringIsNull(inputList.get(1))) {
			questionNaire.setInput2(inputList.get(1));
		}
		if (inputList.size() > 2 && !StringUtil.stringIsNull(inputList.get(2))) {
			questionNaire.setInput3(inputList.get(2));
		}
		if (inputList.size() > 3 && !StringUtil.stringIsNull(inputList.get(3))) {
			questionNaire.setInput4(inputList.get(3));
		}
		if (inputList.size() > 4 && !StringUtil.stringIsNull(inputList.get(4))) {
			questionNaire.setInput5(inputList.get(4));
		}
		// 额外详细1-2
		if (textAreaList.size() > 0 && !StringUtil.stringIsNull(textAreaList.get(0))) {
			questionNaire.setTextarea1(textAreaList.get(0));
		}
		if (textAreaList.size() > 1 && !StringUtil.stringIsNull(textAreaList.get(1))) {
			questionNaire.setTextarea2(textAreaList.get(1));
		}
		SqlSession sqlSession = null;
		try {
			sqlSession = MybatisManager.getSqlSession();
			QuestionNaireMapper questionNaireMapper = sqlSession.getMapper(QuestionNaireMapper.class);
			int result = questionNaireMapper.insert(questionNaire);
			if (result == 0) {
				LogManager.mariadbLog.warn("创建答案失败");
				return null;
			}
			sqlSession.commit();
			return questionNaire;
		} catch (Exception e) {
			if (sqlSession != null) {
				sqlSession.rollback();
			}
			LogManager.mariadbLog.error("创建答案异常", e);
			return null;
		} finally {
			if (sqlSession != null) {
				sqlSession.close();
			}
		}
	}
}
