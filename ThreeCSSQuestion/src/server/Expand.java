package server;

import java.util.TimeZone;

import config.CommonConfigQuestionNaire;
import http.HOpCodeQuestionNaire;
import init.IExpand;
import init.Init;
import service.QuestionService;

public class Expand implements IExpand {

	@Override
	public void init() throws Exception {
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));
		HOpCodeQuestionNaire.init();
		CommonConfigQuestionNaire.init();
		Init.registerService(QuestionService.class);
	}

	@Override
	public void threadInit() throws Exception {

	}

}
