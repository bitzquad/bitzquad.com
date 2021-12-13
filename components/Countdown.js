import React, { useEffect, useState } from 'react';
import style from '../styles/countdown.module.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2022-2-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: fillNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: fillNumber(Math.floor((difference / 1000 / 60) % 60)),
        seconds: fillNumber(Math.floor((difference / 1000) % 60)),
      };
    }

    return timeLeft;
  };
  const fillNumber = (num) => {
    if (num < 1) {
      return '00';
    } else if (num < 10) {
      return `${0}${num}`;
    } else {
      return num;
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className={style.timeLeftContainer}>
        <span className={style.timeLeft}>{timeLeft[interval]}</span>
        <span className={style.timeLeftTitle}>{interval}</span>
      </div>
    );
  });
  return (
    <div className={style.wrapper}>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <div className={style.timeLeftContainer}>
          <span className={style.timeLeftTitle}>Time's up!</span>
        </div>
      )}
    </div>
  );
};

export default Countdown;
