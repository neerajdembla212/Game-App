import React from "react";
import { Typography } from "../elements/typography";
import { useShowQuizTimeInfo } from "../hooks/use-show-quiz-time-remaining";
import { QuizDetail } from "../types/quiz";
import { QuizStartTimeRemaining } from "./quiz-start-time-remaining";

interface QuizLoadContainerProps {
  quizTime: Date;
}
export const QuizLoadContainer: React.FC<QuizLoadContainerProps> = (props) => {
  const { quizTime } = props;
  if (!quizTime) {
    return null;
  }
  const { duration, secondsRemaining } = useShowQuizTimeInfo(quizTime);
  console.log("secondsRemaining ", secondsRemaining);
  return (
    <>
      {secondsRemaining > 10 && (
        <QuizStartTimeRemaining
          minutes={duration.minutes}
          seconds={duration.seconds}
        />
      )}
    </>
  );
};
