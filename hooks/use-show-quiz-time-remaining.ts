import { useState, useEffect } from "react";
import {
  intervalToDuration,
  formatDuration,
  formatRelative,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export const useShowQuizTimeInfo = (quizTime: Date) => {
  const [timeInWords, setTimeInWords] = useState("");
  const [durationInWords, setDurationInWords] = useState("");
  const [minutesRemaining, setMinutesRemaining] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  const GAME_START_BEFORE_MINUTES = 5;
  useEffect(() => {
    const now = new Date();
    if (now.getTime() >= quizTime.getTime()) {
      setTimeInWords("Game Started");
      setDurationInWords("00:00:00 left");
      return;
    }

    const intervalTimer = setInterval(() => {
      const newDuration = formatDuration(
        intervalToDuration({
          start: new Date(),
          end: quizTime,
        })
      );
      const newMinutesRemaining = differenceInMinutes(quizTime, now);
      const newSecondsRemaining = differenceInSeconds(quizTime, now);
      let newTime;
      if (newMinutesRemaining > GAME_START_BEFORE_MINUTES - 1) {
        newTime = formatRelative(quizTime, now);
      } else {
        newTime = "Room Open";
      }
      setDurationInWords(newDuration + " left");
      setTimeInWords(newTime);
      console.log("time : ", newMinutesRemaining, newSecondsRemaining);
      setMinutesRemaining(newMinutesRemaining);
      setSecondsRemaining(newSecondsRemaining);
    }, 1000);

    return () => {
      console.log("clearing interval ", intervalTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return {
    timeInWords,
    durationInWords,
    minutesRemaining,
    secondsRemaining,
  };
};
