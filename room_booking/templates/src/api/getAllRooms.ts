import { BASE_URL } from 'src/api/constant';

export const getAllRooms = async () => {
    const response = await fetch(`${BASE_URL}/api/room/`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
};
