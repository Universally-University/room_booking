import { getAllRooms } from 'src/api/getAllRooms';
import RoomCard from '@components/RoomCard.tsx';
import { useEffect, useState } from 'react';

export default function Main() {
  const [roomData, setRoomData] = useState<JSON[]>([]);

  const getRooms = async () => {
    const response = await getAllRooms();
    setRoomData(response);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center grow">
      <p className="text-black text-3xl font-jakarta py-4">Reserve a room</p>
      <div className="grid grid-cols-3 gap-4 w-1/2">
        {roomData.map((data: any, index: number) => {
          return <RoomCard key={index} seatNum={data.num_seats} title={`Room ${data.room_id}`} roomId={data.room_id}></RoomCard>;
        })}
      </div>
    </main>
  );
}
