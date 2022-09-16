import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box display='flex' flexDirection='column' mb='2rem' mt='3rem' >
            <Typography textAlign='center' mx='auto' variant='h4' fontWeight='300' color='#e0fffb' letterSpacing='4px' >dev<span className='span-foot' >.toolBox</span></Typography>
            <Typography color='#e0fffb' mt='1rem' fontWeight='200' fontSize='1rem' textAlign='center' variant='h6'>A small toolbox to find everything and get started on any project quickly!</Typography>
            <img className='metaImg' src="../assets/metaImg.png" alt="metaImg" />
        </Box>
    )
}
export default Footer