import _ from 'lodash';
import { useEffect, type SetStateAction, type Dispatch, useState } from 'react';
import moment from 'moment';
import { getRoomReservations } from 'src/api/getRoomReservations';

interface Props {
  selectedHours: number[];
  setSelectedHours: Dispatch<SetStateAction<number[]>>;
  columnDate: string;
  selectedColumn: string;
  setSelectedColumn: Dispatch<SetStateAction<string>>;
  bookButtonClicked: number;
}

export default function ReservingColumn({
  selectedColumn,
  setSelectedColumn,
  columnDate,
  selectedHours,
  setSelectedHours,
  bookButtonClicked
}: Props) {
  const rangeOfHours = _.range(9, 19);
  const [reservedHours, setReservedHours] = useState<number[]>([]);

  const date = moment(columnDate, 'MMM Do YY');

  useEffect(() => {
    setReservedHours([]);
    getReserved();
  }, [columnDate]);

  useEffect(() => {
    if (selectedColumn === columnDate) setReservedHours([...reservedHours, ...selectedHours]);
  }, [bookButtonClicked]);

  const getReserved = async () => {
    const response = await getRoomReservations(date.format('YYYY[-]M[-]D'));
    for (const i of response) {
      const startHour = Number(moment(i.start_time, 'H[:]m[:]s').format('H'));
      const endHour = Number(moment(i.end_time, 'H[:]m[:]s').format('H'));
      const reservedRange = _.range(startHour, endHour);
      setReservedHours([...reservedHours, ...reservedRange]);
    }
  };

  // Not pretty, but wdyd
  const onClick = (hour: number) => {
    if (selectedColumn !== columnDate) {
      setSelectedHours([hour]);
    } else {
      const offset = selectedHours[0] > hour ? -1 : 1;
      const newRange = _.range(selectedHours[0], hour + offset);
      for (const i of reservedHours) {
        if (_.includes(newRange, i)) return;
      }
      setSelectedHours(newRange);
    }
    setSelectedColumn(columnDate);
  };

  return (
    <>
      {rangeOfHours.map((hour: number, index) => {
        if (_.includes(reservedHours, hour)) {
          return <p key={index} className="border text-black bg-gray-500 text-center px-2 py-2 h-12"></p>;
        } else {
          return (
            <p
              onClick={() => {
                onClick(hour);
              }}
              className={`border border-gray-400 text-black text-center px-2 py-2 h-12 ${
                _.includes(selectedHours, hour) && selectedColumn === columnDate ? 'bg-slate-300' : 'bg-white'
              }`}
              key={index}
            ></p>
          );
        }
      })}
    </>
  );
}
