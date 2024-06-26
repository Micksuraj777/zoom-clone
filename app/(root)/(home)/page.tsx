'use client'
import { useState, useEffect } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const currentTime = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const currentDate = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' })).format(now);
      setTime(currentTime);
      setDate(currentDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at:  Upcoming
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl uppercase">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  );
};

export default Home;
