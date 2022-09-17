import { useState, useEffect } from "react";
import {
  intervalToDuration,
  formatRelative,
  differenceInMinutes,
  differenceInSeconds,
  Duration,
} from "date-fns";

const INIT_DURATION = {
  days: 0,
  hours: 0,
  minutes: 0,
  months: 0,
  seconds: 0,
  years: 0,
  weeks: 0,
};
export const useShowQuizTimeInfo = (quizTime: Date) => {
  const [timeInWords, setTimeInWords] = useState("");
  const [duration, setDuration] = useState<Required<Duration>>(INIT_DURATION);
  const [minutesRemaining, setMinutesRemaining] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  const GAME_START_BEFORE_MINUTES = 5;
  let intervalTimer: NodeJS.Timer;
  useEffect(() => {
    let now = new Date();
    now.setMilliseconds(0);
    if (differenceInSeconds(quizTime, now) <= 0) {
      setTimeInWords("Game Started");
      setDuration(INIT_DURATION);
      clearInterval(intervalTimer);
      return;
    }

    intervalTimer = setInterval(() => {
      let now = new Date();
      now.setMilliseconds(0);
      const newMinutesRemaining = differenceInMinutes(quizTime, now);
      const newSecondsRemaining = differenceInSeconds(quizTime, now);
      if (newSecondsRemaining <= 0) {
        setTimeInWords("Game Started");
        setDuration(INIT_DURATION);
        setMinutesRemaining(0);
        setSecondsRemaining(0);
        clearInterval(intervalTimer);
        return;
      }
      const newDuration = intervalToDuration({
        start: new Date(),
        end: quizTime,
      });
      let newTime;
      if (newMinutesRemaining > GAME_START_BEFORE_MINUTES - 1) {
        newTime = formatRelative(quizTime, now);
      } else {
        newTime = "Room Open";
      }
      setDuration(newDuration as typeof INIT_DURATION);
      setTimeInWords(newTime);
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
    duration,
    minutesRemaining,
    secondsRemaining,
  };
};
