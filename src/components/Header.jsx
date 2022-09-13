import { Box, Link, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player'

const Header = () => {
    return (
        <>
            <Box className='hero-banner' mx='auto' maxWidth='80vw' minHeight='55vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='1rem' >
                <Player autoplay loop renderer='svg' src="https://assets7.lottiefiles.com/packages/lf20_tsdnk8ut.json" style={{ height: '300px', width: '300px' }} />
                <Typography textAlign='center' underline='none' href='#tools' className='header' variant='h2' color='#e0fffb' letterSpacing='4px' >dev<span className='span' >.toolBox</span></Typography>
                <Box>
                    <Link href='#designtools' mx='3rem' underline='none' color='#e0fffb' >#Design</Link>
                    <Link href='#codetools' mx='3rem' underline='none' color='#e0fffb' >#Code</Link>
                </Box>
            </Box>
        </>
    )
}
export default Header