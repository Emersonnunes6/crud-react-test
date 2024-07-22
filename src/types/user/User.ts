export type User = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
}

export type UserFormInput = Omit<User, 'id'>;

export type CreateUserResponse = {
    message: string;
    status: number;
}