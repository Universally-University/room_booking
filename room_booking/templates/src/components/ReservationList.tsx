import ReservedHeader from '@components/ReservedHeader.tsx';
import ReservedRow from '@components/ReservedRow.tsx';
import { useEffect, useState } from 'react';
import { getMyReservation } from 'src/api/getMyReservation';
import Cookies from 'js-cookie';
import Astro from 'astro';

interface Props {
  memberId: string;
}

export default function ReservationList({ memberId }: props) {
  const [rowData, setRowdata] = useState<JSON[]>([]);

  useEffect(() => {
    getMyReservations();
  }, []);
  console.log('test');
  const getMyReservations = async () => {
    console.log('test');
    const memberId = Number(Cookies.get('member_ID'));
    if (Number.isNaN(memberId)) return;
    const rowData = await getMyReservation(memberId);
    setRowdata(rowData);
  };

  return (
    <main className="bg-grey items-center flex flex-col">
      <h1 className="text-black font-jakarta text-2xl py-4">Reserved rooms</h1>
      <div className="flex flex-col justify-center items-center py-2">
        <div className="header grid grid-cols-5 h-10 text-black">
          {memberId}
          <ReservedHeader></ReservedHeader>
          {rowData.map((data: any, index: number) => {
            return (
              <ReservedRow
                index={index + 1}
                date={data.date}
                endTime={data.end_time}
                roomName={data.room}
                startTime={data.start_time}
              ></ReservedRow>
            );
          })}
        </div>
      </div>
    </main>
  );
}
