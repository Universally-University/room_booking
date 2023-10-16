import { BASE_URL } from 'src/api/constant';

export const getMyReservation = async (memberId: number) => {
    if (Number.isNaN(memberId)){
        return
    }
    const response = await fetch(`${BASE_URL}/api/reserve/?member_id=${memberId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'token'
        }
    });

    return response.json();
};
