import { ImageSourcePropType } from "react-native";
export interface Quiz {
  id: string;
  name: string;
  quizTime: Date;
  quizImage: ImageSourcePropType;
  isOngoing: boolean;
  isVotingRequired?: boolean;
}
