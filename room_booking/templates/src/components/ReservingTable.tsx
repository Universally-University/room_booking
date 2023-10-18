import _, { first } from 'lodash';
import ReservingColumn from '@components/ReservingColumn.tsx';
import moment from 'moment';
import { useState } from 'react';
import { bookRoom } from 'src/api/bookRoom';
import Cookies from 'js-cookie';

export default function ReservingTable() {
  const rangeOfHours = _.range(9, 19);
  const memberId = Number(Cookies.get('member_ID'));

  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedHours, setSelectedHours] = useState<number[]>([]);
  const [bookButtonClicked, setBookButtonClicked] = useState(0);
  const [rangeOfDays, setRangeOfDays] = useState<number[]>([..._.range(1, 8)]);

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const roomId = Number(params.get('roomId'));

  const onClick = async () => {
    console.log(selectedColumn, selectedHours);
    const date = moment(selectedColumn, 'MMM Do YY');

    bookRoom(date, selectedHours, roomId, memberId).then(() => {
      alert('Succesfully booked room');
    });
    setBookButtonClicked((prev) => prev + 1);
  };

  const nextWeek = () => {
    const lastDay = rangeOfDays[rangeOfDays.length - 1];
    setRangeOfDays(_.range(lastDay + 1, lastDay + 8));
  };

  const prevWeek = () => {
    const firstDay = rangeOfDays[0];
    if (firstDay == 1) return;
    setRangeOfDays(_.range(firstDay - 7, firstDay));
  };

  return (
    <>
      <p className="text-black text-3xl text-center font-jakarta py-4">Room {roomId} reservations</p>
      <div className="w-3/4 flex grow m-auto justify-center items-center py-2">
        <div className="cursor-pointer px-5 text-3xl" onClick={prevWeek}>
          &lt;
        </div>
        <div className="header grid grid-cols-8  text-black">
          <div className="text-center py-2">
            <p className="text-center py-2 h-12 text-black"></p>
            {rangeOfHours.map((data, index) => {
              return (
                <p key={index} className="border border-gray-400 text-center px-2 h-12 py-2">
                  {moment().minutes(0).hour(data).format('h:mm a')}
                </p>
              );
            })}
          </div>
          {rangeOfDays.map((data, index) => {
            return (
              <div className="text-center py-2" key={index}>
                <p className="border border-gray-400 text-center px-4 h-12 py-2">
                  {moment().add(data, 'days').format('MMM Do YY')}
                </p>
                <ReservingColumn
                  columnDate={moment().add(data, 'days').format('MMM Do YY')}
                  selectedColumn={selectedColumn}
                  setSelectedColumn={setSelectedColumn}
                  selectedHours={selectedHours}
                  setSelectedHours={setSelectedHours}
                  bookButtonClicked={bookButtonClicked}
                  roomId={roomId}
                ></ReservingColumn>
              </div>
            );
          })}
          <div className="col-span-8 py-2 flex justify-center items-center">
            <p
              onClick={onClick}
              className={`w-min bg-white px-2 rounded-md text-black ${Number.isNaN(memberId) ? 'hidden' : ''}`}
            >
              Book
            </p>
          </div>
        </div>
        <div className="cursor-pointer px-5 text-3xl" onClick={nextWeek}>
          &gt;
        </div>
      </div>
    </>
  );
}
