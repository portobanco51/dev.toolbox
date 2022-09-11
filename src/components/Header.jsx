import { Box, Typography } from '@mui/material';

const Header = () => {
    return (
        <>
            <Box margin='auto' width='80vw' height='35vh' display='grid' justifyContent='center' alignContent='center' >
                <Typography mx='2rem' variant='h2' letterSpacing='4px' >dev<span className='span' >.toolShack</span></Typography>
            </Box>
        </>
    )
}
export default Header