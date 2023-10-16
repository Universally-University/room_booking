import ReservedHeader from '@components/ReservedHeader.tsx';
import ReservedRow from '@components/ReservedRow.tsx';
import { useEffect, useState } from 'react';
import { getMyReservation } from 'src/api/getMyReservation';
import Cookies from 'js-cookie';

export default function ReservationList() {
  const [rowData, setRowdata] = useState<JSON[]>([]);
  useEffect(() => {
    getMyReservations();
  }, []);

  const getMyReservations = async () => {
    const rowData = await getMyReservation(Number(Cookies.get('member_ID')));
    setRowdata(rowData);
  };

  return (
    <main className="bg-grey items-center flex flex-col">
      <h1 className="text-black font-jakarta text-2xl py-4">Reserved rooms</h1>
      <div className="flex flex-col justify-center items-center py-2">
        <div className="header grid grid-cols-5 h-10 text-black">
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

function getCookie(cname = "member_ID") {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}