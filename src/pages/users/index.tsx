import { useState } from "react";
import ModalAddUser from "./components/modalAddUser";
import { Box, Button } from "@mui/material";
import { Container } from "./styles";
import UserTable from "./components/tableUsers";
import { User } from "../../types/user/User";

const Users = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModal = () => {
        setShowModal(!showModal)
    };

    const usersData: User[] = [
        {
            id: '22',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        },{
            id: '22',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        },{
            id: '22',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        },{
            id: '22',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        },{
            id: '22',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        },{
            id: '22',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        },
        {
            id: '25',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        },
        {
            id: '29',
            firstname: 'Emerson',
            lastname: 'Nunes',
            email: 'emerson@emerson.com'
        }
    ]

    return (
        <Container>
            <Button onClick={handleModal}>Adicionar usuário</Button>
            <ModalAddUser handleModal={handleModal} open={showModal} />
            <Box>
                <UserTable usersData={usersData} />
            </Box>
            {/* 
            {users.map((user) => <CardUser {...user}/>) } */}
        </Container>
    )
}

export default Users;