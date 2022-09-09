import { differenceInMinutes } from "date-fns";

export const isRoomOpen = (quizTime: Date): { roomOpen: boolean } => {
  const now = new Date();
  const GAME_START_BEFORE_MINUTES = 5;
  let roomOpen = false;

  if (now.getTime() >= quizTime.getTime()) {
    roomOpen = true;
    return {
      roomOpen,
    };
  }
  const minutesRemaining = differenceInMinutes(quizTime, now);

  if (minutesRemaining <= GAME_START_BEFORE_MINUTES - 1) {
    roomOpen = true;
    return {
      roomOpen,
    };
  }
  return {
    roomOpen,
  };
};
