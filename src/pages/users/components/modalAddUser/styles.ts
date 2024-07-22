export const styleBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 350,
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pl: 4,
    pr: 4,
    pb: 4
};

export const styleIconClose = {
    width: 40, 
    left: '98%', 
    outline: 'none',
    '&:focus': {
        outline: 'none'
    }
}