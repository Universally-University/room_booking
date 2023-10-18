import { BASE_URL } from 'src/api/constant';

export const getMyReservation = async (memberId: number) => {
    const response = await fetch(`/library/api/reserve/?member_id=${memberId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'token'
        }
    });

    return response.json();
};
