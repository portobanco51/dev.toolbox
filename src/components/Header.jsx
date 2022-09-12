import { Box, Link } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player'

const Header = () => {
    return (
        <>
            <Box className='hero-banner' margin='auto' minWidth='80vw' height='50vh' display='grid' justifyContent='center' alignContent='center' >
                <Player autoplay loop renderer='svg' src="https://assets7.lottiefiles.com/packages/lf20_tsdnk8ut.json" style={{ height: '300px', width: '300px' }} />
                <Link underline='none' href='#tools' className='header' variant='h2' color='#e0fffb' letterSpacing='4px' >dev<span className='span' >.toolShack</span></Link>
            </Box>
        </>
    )
}
export default Header