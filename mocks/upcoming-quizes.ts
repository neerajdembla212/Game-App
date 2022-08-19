import { Quiz } from "../types/quiz";

export const MOCK_UPCOMING_QUIZES: Quiz[] = [
  {
    id: "1",
    name: "Pop Culture",
    quizTime: new Date(),
    quizImage: require("../assets/topic_popCulture.png"),
    isOngoing: false,
    isVotingRequired: false,
  },
  {
    id: "2",
    name: "Movies Or Countries/Travel",
    quizTime: new Date(),
    quizImage: require("../assets/topic_splitMoviesCountries.png"),
    isOngoing: false,
    isVotingRequired: true,
  },
];
