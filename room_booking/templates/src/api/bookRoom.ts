import { max, min } from 'lodash';
import moment from 'moment';
import { BASE_URL } from 'src/api/constant';

`
/api/reserve
{
  "res_id": 3,
  "date": "1111-11-11",
  "start_time": "12:33:00",
  "end_time": "12:33:00",
  "member_id": 2,
  "room": 12
}
`;

export const bookRoom = async (selectedDate: moment.Moment, selectedHours: number[], roomId: number) => {
    const start_time = min(selectedHours)!!;
    const end_time = max(selectedHours)!! + 1;

    const start_time_str = moment().hours(start_time).minutes(0).seconds(0).format('HH:mm:ss');
    const end_time_str = moment().hours(end_time).minutes(0).seconds(0).format('HH:mm:ss');
    const requestJson = {
        date: selectedDate.format('YYYY-MM-DD'),
        start_time: start_time_str,
        end_time: end_time_str,
        member_id: 1,
        room: roomId
    };

    const response = await fetch(`/library/api/reserve/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestJson)
    });

    console.log(response);
    return response;
};
