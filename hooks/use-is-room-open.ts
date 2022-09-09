import { differenceInMinutes } from "date-fns";

export const useIsRoomOpen = (quizTime: Date) => {
  const now = new Date();
  const GAME_START_BEFORE_MINUTES = 5;
  let isRoomOpen = false;

  if (now.getTime() >= quizTime.getTime()) {
    isRoomOpen = true;
    return {
      isRoomOpen,
    };
  }
  const minutesRemaining = differenceInMinutes(quizTime, now);

  if (minutesRemaining <= GAME_START_BEFORE_MINUTES - 1) {
    isRoomOpen = true;
    return {
      isRoomOpen,
    };
  }
  return {
    isRoomOpen,
  };
};
