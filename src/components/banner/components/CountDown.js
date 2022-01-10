import {useEffect, useState} from "react";

export const CountDown = () => {
  const countDownDate = new Date("Jan 11, 2022 21:00:00").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();
      
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(countdown);
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      }
    }, 1000);
  })
  return (
    <div className="countdown-container">
      <div className="days">
        <p className="countdown-label">Days</p>
        <h6 className="countdown-display">{days === 0 ? "00" : days}</h6>
      </div>
      <div className="countdown-space">
        <p className="space">:</p>
      </div>
      <div className="hours">
        <p className="countdown-label">Hours</p>
        <h6 className="countdown-display">{hours === 0 ? "00" : hours < 10 ? `0${hours}` : hours}</h6>
      </div>
      <div className="countdown-space">
        <p className="space">:</p>
      </div>
      <div className="minutes">
        <p className="countdown-label">Minutes</p>
        <h6 className="countdown-display">{minutes === 0 ? "00" : minutes < 10 ? `0${minutes}` : minutes}</h6>
      </div>
      <div className="countdown-space">
        <p className="space">:</p>
      </div>
      <div className="seconds">
        <p className="countdown-label">Second</p>
        <h6 className="countdown-display">{seconds === 0 ? "00" : seconds < 10 ? `0${seconds}` : seconds}</h6>
      </div>
    </div>
  )
}