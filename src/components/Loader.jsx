import { Stack } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Stack direction='row' mt='2rem' justifyContent='center' alignContent='center' width='100%'>
            <RotatingLines strokeColor='#e0bbbf' />
        </Stack>
    )
}
export default Loader