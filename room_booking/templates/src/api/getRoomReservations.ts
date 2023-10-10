import { BASE_URL } from 'src/api/constant';

export const getRoomReservations = async (date: string) => {
    const response = await fetch(`${BASE_URL}/api/reserve/?date=${date}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
};
