import { ImageSourcePropType } from "react-native";

export interface Quiz {
  id: string;
  name: string;
  quizTime: Date;
  quizIntroImage: ImageSourcePropType;
  isOngoing: boolean;
  isVotingRequired?: boolean;
}

export interface FreeQuiz {
  id: string;
  name: string;
  quizImage: ImageSourcePropType;
  totalQuizes: number;
  completedQuizes: number;
  backgroundColor: string;
}

export interface QuizDetail extends Quiz {
  viewerCount: number;
  quizBackgroundImage: ImageSourcePropType;
}
