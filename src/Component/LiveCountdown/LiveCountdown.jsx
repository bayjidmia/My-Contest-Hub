import { useEffect, useState } from "react";

const LiveCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return { expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return <p className="text-red-500 font-bold">Time Over ❌</p>;
  }

  return (
    <div className="flex gap-4 text-center">
      <div>
        <h2 className="text-xl font-bold">{timeLeft.days}</h2>
        <p className="text-gray-500">Days</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">{timeLeft.hours}</h2>
        <p className="text-gray-500">Hours</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">{timeLeft.minutes}</h2>
        <p className="text-gray-500">Minutes</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">{timeLeft.seconds}</h2>
        <p className="text-gray-500">Seconds</p>
      </div>
    </div>
  );
};

export default LiveCountdown;
