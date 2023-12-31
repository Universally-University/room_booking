import LoggedIn from '@components/LoggedIn';
import MyReservation from '@components/MyReservation';
import Cookies from 'js-cookie';
import { useState } from 'react';

interface Props {
  title: string;
  memberId: number;
}

export default function Header({ title, memberId }: Props) {
  return (
    <header className="h-16 bg-blue-500 border-b flex flex-col md:flex-row md:justify-between items-center">
      <div className="logo pl-3 text-white font-bold flex items-center justify-between">
        <a href="/library" className="text-3xl font-jakarta">
          {title}
        </a>
      </div>
      <div className="md:flex menu text-white h-full flex flex-col md:flex-row items-center justify-center md:mx-4">
        <div className="px-4 ease-in-out duration-150 text-center cursor-pointer py-1 border-white border-y md:border-0 border-x-0 w-full md:w-fit">
          <a className="font-jakarta my-5" href="/library">
            Room Bookings
          </a>
        </div>
        <MyReservation memberId={memberId}></MyReservation>
        <div className="group relative px-2 h-16 flex flex-col ease-in-out duration-150 text-center  cursor-pointer border-white border-y md:border-0 border-x-0 w-[120px]">
          <div className="font-jakarta my-5">Enrolment</div>
          <a
            className="font-jakarta px-2 border-b-2 group-hover:visible invisible border-black py-2 z-100 bg-gray-400 text-black"
            href="/enroll/card/"
          >
            New ID Card
          </a>
        </div>
        <div className="group relative px-2 h-16 flex flex-col ease-in-out duration-150 text-center  cursor-pointer border-white border-y md:border-0 border-x-0 w-[130px]">
          <div className="font-jakarta my-5">Wellbeing</div>
          <a
            className="font-jakarta px-2 border-b-2 group-hover:visible invisible border-black py-2 z-100 bg-gray-400 text-black"
            href="/wellbeing/"
          >
            Book an appointment
          </a>
        </div>
        <LoggedIn memberId={memberId}></LoggedIn>
      </div>
    </header>
  );
}
