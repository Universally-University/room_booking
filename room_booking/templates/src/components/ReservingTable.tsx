import _ from 'lodash';
import ReservingColumn from '@components/ReservingColumn.tsx';
import moment from 'moment';
import { useState } from 'react';

const rangeOfDays = _.range(1, 8);
const rangeOfHours = _.range(9, 19);

export default function ReservingTable() {
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedHours, setSelectedHours] = useState<number[]>([]);

  return (
    <>
      <div className="w-3/4 m-auto grow justify-center items-center py-2">
        <div className="header grid grid-cols-8 h-10 text-white">
          <div className="text-center  py-2">
            <p className="text-center py-2 h-12 text-black"></p>
            {rangeOfHours.map((data) => {
              return <p className="border text-center px-2 h-12 py-2">{moment().minutes(0).hour(data).format('h:mm a')}</p>;
            })}
          </div>
          {rangeOfDays.map((data, index) => {
            return (
              <div className="text-center py-2">
                <p className="border text-center px-2 h-12 py-2">{moment().add(data, 'days').format('MMM Do YY')}</p>
                <ReservingColumn
                  columnDate={moment().add(data, 'days').format('MMM Do YY')}
                  selectedColumn={selectedColumn}
                  setSelectedColumn={setSelectedColumn}
                  selectedHours={selectedHours}
                  setSelectedHours={setSelectedHours}
                  key={index}
                ></ReservingColumn>
              </div>
            );
          })}
          <div className="col-span-8 py-2 flex justify-center items-center">
            <p className="w-min bg-white px-2 rounded-md text-black">Book</p>
          </div>
        </div>
      </div>
    </>
  );
}
