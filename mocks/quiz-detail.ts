import { QuizDetail } from "../types/quiz";

export function getQuizDetail(id: string): QuizDetail {
  return {
    id,
    name: "Pop Culture",
    quizTime: new Date(),
    quizIntroImage: require("../assets/topic_popCulture.png"),
    isOngoing: true,
    isVotingRequired: false,
    viewerCount: 100,
    quizBackgroundImage: require("../assets/bg_popCulture.png"),
  };
}
