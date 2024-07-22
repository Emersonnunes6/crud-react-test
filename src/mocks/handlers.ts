import { http, HttpResponse } from 'msw'
import { CreateUserResponse, User } from '../types/user/User'

const users: User[] = []

const generateRandomId = () => {
    return Math.random().toString().substr(2, 3); 
};

export const handlers = [
    http.get('/api/users', () => {
        try {
            return HttpResponse.json(users)
        } catch {
            return HttpResponse.json({ status: 500, message: 'Ocorreu um erro' })
        }
    }),

    http.post<User>('/api/users', async ({ request }) => {
        try {
            const newUser = await request.json() as Omit<User, 'id'>

            const userWithId: User = { id: generateRandomId(), ...newUser }
            users.push(userWithId)

            return HttpResponse.json<CreateUserResponse>({ status: 200, message: 'Usuário criado com sucesso!' })
        } catch {
            return HttpResponse.json<CreateUserResponse>({ status: 500, message: 'Ocorreu um erro' })
        }

    })
]