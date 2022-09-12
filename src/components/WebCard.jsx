import { Box, Link, Typography } from '@mui/material'

const WebCard = ({ data }) => {
    return (
        <Box className='card' boxShadow='0px 12px 40px rgba(0,0,0,0.3)' borderRadius='0.8rem' maxWidth={'30rem'} minWidth='25rem' >
            <Link display='flex' flexDirection='column' gap='0.5rem' underline='none' href={data.url} alignItems='center' target='_blank' rel="noreferrer">
                <img className='card-img' loading='lazy' src={data.img} alt={data.title} />
                <Typography textTransform='capitalize' letterSpacing='1.5px' textAlign='center' fontSize='1.5rem' variant='h4' color={"#fff"}>{data.title}</Typography>
                <Typography p='1rem' m='auto' textAlign='center' maxWidth='30rem' variant='h5' fontSize='1rem' color={"#e0fffb"}>{data.description}</Typography>
            </Link>
        </Box>
    )
}
export default WebCard