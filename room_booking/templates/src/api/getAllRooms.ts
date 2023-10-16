import { BASE_URL } from 'src/api/constant';

export const getAllRooms = async () => {
    const response = await fetch(`/library/api/room/`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
};
