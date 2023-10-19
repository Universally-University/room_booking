import { getAllRooms } from 'src/api/getAllRooms';
import RoomCard from '@components/RoomCard.tsx';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '@components/Header';
// import {Astro} from 'astro';

export default function Main() {
  const [roomData, setRoomData] = useState<JSON[]>([]);
  const memberId = Number(Cookies.get('member_ID'));
  console.log(memberId);
  const getRooms = async () => {
    const response = await getAllRooms();
    // console.log(Astro.cookie);
    setRoomData(response);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <Header memberId={memberId} title={'Library Booking'}></Header>
      <main className="flex flex-col items-center justify-center grow">
        <p className="text-black text-3xl font-jakarta py-4">Reserve a room</p>
        <div className="grid grid-cols-3 gap-4 w-1/2">
          {roomData.map((data: any, index: number) => {
            return (
              <RoomCard key={index} seatNum={data.num_seats} title={`Room ${data.room_id}`} roomId={data.room_id}></RoomCard>
            );
          })}
        </div>
      </main>
    </>
  );
}
