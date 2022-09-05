import { ImageSourcePropType } from "react-native";
export interface Quiz {
  id: string;
  name: string;
  quizTime: Date;
  quizImage: ImageSourcePropType;
  isOngoing: boolean;
  isVotingRequired?: boolean;
}
export interface FreeQuiz {
  id: string;
  name: string;
  quizImage: ImageSourcePropType;
  totalQuizes: number;
  completedQuizes: number;
  backgroundColor: string
}
