import { BASE_URL } from '../config';

export interface createUserType {
    email: string;
    password: string;
    firstName:string;
    lastName:string
}

export const createUser = async (data: createUserType) => {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};
