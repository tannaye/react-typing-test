import { useEffect, useState } from "react";

const CountDownTimer = ({ duration, setDuration }) => {
  const { minutes, seconds } = duration;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      setDuration({ minutes: 0, seconds: 0 });
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="">
        <p className="black-text">
          {" "}
          Test ends in{" "}
          {`min${mins === 1 ? "" : "s"}:${mins} sec${
            secs === 1 ? "" : "s"
          }:${secs}`}
        </p>
      </div>
    </>
  );
};

export default CountDownTimer;
