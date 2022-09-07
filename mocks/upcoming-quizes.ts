import { Quiz } from "../types/quiz";

const mockTomorrowQuizDate = new Date();
mockTomorrowQuizDate.setDate(mockTomorrowQuizDate.getDate() + 1);
mockTomorrowQuizDate.setHours(14);
mockTomorrowQuizDate.setMinutes(0);
mockTomorrowQuizDate.setSeconds(0);

const mockTodayQuizDate = new Date();
mockTodayQuizDate.setHours(14);
mockTodayQuizDate.setMinutes(12);
mockTodayQuizDate.setSeconds(0);

export const MOCK_UPCOMING_QUIZES: Quiz[] = [
  {
    id: "1",
    name: "Pop Culture",
    quizTime: mockTomorrowQuizDate,
    quizIntroImage: require("../assets/topic_popCulture.png"),
    isOngoing: false,
    isVotingRequired: false,
  },
  {
    id: "2",
    name: "Movies Or Countries/Travel",
    quizTime: mockTodayQuizDate,
    quizIntroImage: require("../assets/topic_splitMoviesCountries.png"),
    isOngoing: false,
    isVotingRequired: true,
  },
];
