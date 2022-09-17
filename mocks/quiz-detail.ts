import { QuizDetail } from "../types/quiz";
import { MOCK_UPCOMING_QUIZES } from "../mocks/upcoming-quizes";

export function getQuizDetail(id: string): QuizDetail {
  return {
    id,
    name: "Pop Culture",
    quizTime: MOCK_UPCOMING_QUIZES[1].quizTime,
    quizIntroImage: require("../assets/topic_popCulture.png"),
    isOngoing: true,
    isVotingRequired: false,
    viewerCount: 100,
    quizBackgroundImage: require("../assets/bg_popCulture.png"),
  };
}
