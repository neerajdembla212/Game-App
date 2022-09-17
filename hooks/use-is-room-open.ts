import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

export const useIsRoomOpen = (quizTime: Date) => {
  const [isRoomOpen, setIsRoomOpen] = useState(false);
  const GAME_START_BEFORE_MINUTES = 5;
  let intervalTimer: NodeJS.Timer;
  useEffect(() => {
    let now = new Date();
    if (differenceInSeconds(quizTime, now) <= GAME_START_BEFORE_MINUTES * 60) {
      setIsRoomOpen(true);
      clearInterval(intervalTimer);
      return;
    }
    intervalTimer = setInterval(() => {
      let now = new Date();
      if (
        differenceInSeconds(quizTime, now) <=
        GAME_START_BEFORE_MINUTES * 60
      ) {
        setIsRoomOpen(true);
        clearInterval(intervalTimer);
      }
    }, 1000);

    return () => {
      console.log("clearing is room open interval ", intervalTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return {
    isRoomOpen,
  };
};
