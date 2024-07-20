import { User } from "../types/user/User";

export class UserService {
    private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
        const response = await fetch(endpoint, options);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        return response.json();
    }

    public async getUsers(): Promise<User[]> {
        return this.request<User[]>('/api/users', {
            method: 'GET',
        });
    }

    public async createUser(user: Omit<User, 'id'>): Promise<User[]> {
        return this.request<User[]>('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    }
}