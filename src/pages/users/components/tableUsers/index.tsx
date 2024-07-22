import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Container, stylesTable, stylesTableContainer } from './styles';

interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
}

interface UserTableProps {
    usersData: User[];
}

const UserTable: React.FC<UserTableProps> = ({ usersData }) => {
    const [users, setUsers] = useState<User[]>(usersData);

    return (
        <Container>
            <TableContainer sx={stylesTableContainer} component={Paper}>
                <Table sx={stylesTable}>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#c6c6c6' }}>
                            <TableCell>Nome</TableCell>
                            <TableCell>Sobrenome</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ width: '70%' }}>
                        {users.map(user => (
                            <>
                                <TableRow>
                                    <TableCell>{user.firstname}</TableCell>
                                    <TableCell>{user.lastname}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => console.log(user)}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default UserTable;
