import { Box, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player'

const Header = () => {
    return (
        <>
            <Box className='hero-banner' margin='auto' width='80vw' height='35vh' display='grid' justifyContent='center' alignContent='center' >
                <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_tsdnk8ut.json" style={{ height: '300px', width: '300px' }} />
                <Typography className='header' mx='2rem' variant='h2' color='#e0fffb' letterSpacing='4px' >dev<span className='span' >.toolShack</span></Typography>
            </Box>
        </>
    )
}
export default Header