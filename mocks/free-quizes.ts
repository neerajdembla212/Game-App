import { FreeQuiz } from "../types/quiz";

export const MOCK_FREE_QUIZES: FreeQuiz[] = [
  {
    id: "1",
    name: "Movies",
    quizImage: require("../assets/topicsThemes_movies.png"),
    totalQuizes: 8,
    completedQuizes: 2,
    backgroundColor: "#9E305F",
  },
  {
    id: "2",
    name: "Countries/Travel",
    quizImage: require("../assets/topicsThemes_countriesTravel.png"),
    totalQuizes: 8,
    completedQuizes: 2,
    backgroundColor: "#3CA8E4",
  },
  {
    id: "3",
    name: "Topical/News",
    quizImage: require("../assets/topicsThemes_topicalNews.png"),
    totalQuizes: 8,
    completedQuizes: 2,
    backgroundColor: "#0676DD",
  },
  {
    id: "4",
    name: "Sports",
    quizImage: require("../assets/topicsThemes_sports.png"),
    totalQuizes: 8,
    completedQuizes: 2,
    backgroundColor: "#6AB32C",
  },
  {
    id: "5",
    name: "Music",
    quizImage: require("../assets/topicsThemes_music.png"),
    totalQuizes: 8,
    completedQuizes: 2,
    backgroundColor: "#EE9E02",
  },
];
