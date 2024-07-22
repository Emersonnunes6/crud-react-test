import { Avatar, Box, Typography } from "@mui/material"
import { Container, stylesBox } from "./styles"

interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
}

const CardUser: React.FC<User> = ({ id, firstname, lastname, email }) => {

    const getRandomColor = (): string => {
        const randomColor = Math.floor(Math.random() * 0xFFFFFF);
        return `#${randomColor.toString(16).padStart(6, '0')}`;
    }

    const getInitials = () => {
        const firstInitial = firstname.charAt(0).toUpperCase();
        const lastInitial = lastname.charAt(0).toUpperCase();
        return `${firstInitial}${lastInitial}`;
    }

    return (
        <Container>
            <Box sx={stylesBox}>
                <Avatar sx={{bgcolor: getRandomColor()}}>{getInitials()}</Avatar>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ p: 1 }}>
                    {`${firstname} ${lastname}`}
                </Typography>
            </Box>
            <Typography id="modal-modal-title" variant="h5" component="h5" sx={{pl: 7}}>
                {email}
            </Typography>
        </Container>
    )
}

export default CardUser