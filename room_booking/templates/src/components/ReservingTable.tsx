import _ from 'lodash';
import ReservingColumn from '@components/ReservingColumn.tsx';
import moment from 'moment';
import { useState } from 'react';
import { bookRoom } from 'src/api/bookRoom';

const rangeOfDays = _.range(1, 8);
const rangeOfHours = _.range(9, 19);

export default function ReservingTable() {
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedHours, setSelectedHours] = useState<number[]>([]);
  const [bookButtonClicked, setBookButtonClicked] = useState(0);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const roomId = Number(params.get('roomId'));

  const onClick = async () => {
    console.log(selectedColumn, selectedHours);
    const date = moment(selectedColumn, 'MMM Do YY');

    bookRoom(date, selectedHours, roomId).then(() => {
      alert('Succesfully booked room');
    });
    setBookButtonClicked((prev) => prev + 1);
  };
  return (
    <>
      <div className="w-3/4 m-auto grow justify-center items-center py-2">
        <div className="header grid grid-cols-8 h-10 text-white">
          <div className="text-center py-2">
            <p className="text-center py-2 h-12 text-black"></p>
            {rangeOfHours.map((data, index) => {
              return (
                <p key={index} className="border text-center px-2 h-12 py-2">
                  {moment().minutes(0).hour(data).format('h:mm a')}
                </p>
              );
            })}
          </div>
          {rangeOfDays.map((data, index) => {
            return (
              <div className="text-center py-2" key={index}>
                <p className="border text-center px-2 h-12 py-2">{moment().add(data, 'days').format('MMM Do YY')}</p>
                <ReservingColumn
                  columnDate={moment().add(data, 'days').format('MMM Do YY')}
                  selectedColumn={selectedColumn}
                  setSelectedColumn={setSelectedColumn}
                  selectedHours={selectedHours}
                  setSelectedHours={setSelectedHours}
                  bookButtonClicked={bookButtonClicked}
                ></ReservingColumn>
              </div>
            );
          })}
          <div className="col-span-8 py-2 flex justify-center items-center">
            <p onClick={onClick} className="w-min bg-white px-2 rounded-md text-black">
              Book
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
