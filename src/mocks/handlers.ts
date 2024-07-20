import { http, HttpResponse } from 'msw'
import { User } from '../types/user/User'

const users: User[] = []

const generateRandomId = () => {
    return Math.random().toString().substr(2, 3); // Gera uma string de 10 dígitos
};

export const handlers = [
    http.get('/api/users', () => {
        return HttpResponse.json(users)
    }),

    http.post<User>('/api/users', async ({ request }) => {
        const newUser = await request.json() as Omit<User, 'id'>

        const userWithId: User = {id: generateRandomId(), ...newUser}
        users.push(userWithId)

        return HttpResponse.json(users, { status: 200 })
    })
]