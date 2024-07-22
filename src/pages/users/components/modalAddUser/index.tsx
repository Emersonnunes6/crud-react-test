import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material"
import { styleBox, styleIconClose } from "./styles"
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { UserFormInput } from "../../../../types/user/User";
import { Close } from "@mui/icons-material";
import { UserService } from "../../../../services/users";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalProps {
    open: boolean;
    handleModal: () => void
}

const ModalAddUser: React.FC<ModalProps> = ({ open, handleModal }) => {
    const userService = new UserService();
    const { control, handleSubmit, getValues, formState: { errors }, reset } = useForm<UserFormInput>()

    const createUser = async () => {
        const newUser = getValues()
        await userService.createUser(newUser)
            .then((res) => {
                closeModal();
                toast.success(res.message)
            }).catch((err) => {
                toast.error(err.message)
            })
    }

    const onSubmit = () => {
        createUser();
    }

    const onError = (errors: any) => {
        for (const key in errors) {
            if (errors[key]) {
                toast.error(errors[key].message);
            }
        }
    };

    const closeModal = () => {
        reset();
        handleModal();
    }

    return (
        <>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component='form' onSubmit={handleSubmit(onSubmit, onError)} sx={styleBox}>
                    <IconButton style={styleIconClose} onClick={closeModal}>
                        <Close />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Adicionar usuário
                    </Typography>

                    <Controller
                        name="firstname"
                        control={control}
                        rules={{ required: 'Nome é obrigatório' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                sx={{ p: 0.5 }}
                                placeholder="Nome"
                                error={!!errors.firstname}
                                helperText={errors.firstname ? 'Nome é obrigatório' : ''}
                            />
                        )}
                    />
                    <Controller
                        name="lastname"
                        control={control}
                        rules={{ required: 'Sobrenome é obrigatório' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                sx={{ p: 0.5 }}
                                placeholder="Sobrenome"
                                error={!!errors.lastname}
                                helperText={errors.lastname ? 'Sobrenome é obrigatório' : ''}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email é obrigatório',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Email inválido'
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                sx={{ p: 0.5 }}
                                placeholder="Email"
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained">Confirmar</Button>
                </Box>
            </Modal>
        </>
    )
}

export default ModalAddUser;