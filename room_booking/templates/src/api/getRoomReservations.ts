import { BASE_URL } from 'src/api/constant';

export const getRoomReservations = async (date: string, roomId: number) => {
    const response = await fetch(`/library/api/reserve/?date=${date}&room=${roomId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
};
