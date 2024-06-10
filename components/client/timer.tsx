import React, { useEffect, useRef, useState } from "react";

interface TimerProps {
  start: boolean;
  duration: number; // Duration in seconds
  onTimeUp: () => void;
}

const Timer = ({ start, duration, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (start) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(interval);
            onTimeUp();
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
