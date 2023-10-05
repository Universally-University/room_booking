import _ from 'lodash';
import { useEffect, type SetStateAction, type Dispatch } from 'react';

interface Props {
  selectedHours: number[];
  setSelectedHours: Dispatch<SetStateAction<number[]>>;
  columnDate: string;
  selectedColumn: string;
  setSelectedColumn: Dispatch<SetStateAction<string>>;
}

export default function ReservingColumn({
  selectedColumn,
  setSelectedColumn,
  columnDate,
  selectedHours,
  setSelectedHours
}: Props) {
  const rangeOfHours = _.range(9, 19);
  const alreadyReserved = [10, 18];

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const roomId = params.get('roomId');

  // Not pretty, but oh well
  const onClick = (hour: number) => {
    if (selectedColumn !== columnDate) {
      setSelectedHours([hour]);
    } else {
      const offset = selectedHours[0] > hour ? -1 : 1;
      const newRange = _.range(selectedHours[0], hour + offset);
      for (const i of alreadyReserved) {
        if (_.includes(newRange, i)) return;
      }
      setSelectedHours(newRange);
    }
    setSelectedColumn(columnDate);
  };

  return (
    <>
      {rangeOfHours.map((hour: number) => {
        if (_.includes(alreadyReserved, hour)) {
          return <p className="border text-black bg-slate-300 text-center px-2 py-2 h-12"></p>;
        } else {
          return (
            <p
              onClick={() => {
                onClick(hour);
              }}
              className={`border text-black text-center px-2 py-2 h-12 ${
                _.includes(selectedHours, hour) && selectedColumn === columnDate ? 'bg-gray-500' : 'bg-black'
              }`}
            ></p>
          );
        }
      })}
    </>
  );
}
