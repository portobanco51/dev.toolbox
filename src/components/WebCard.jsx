import { Box, Link, Typography } from '@mui/material'

const WebCard = ({ data }) => {
    return (
        <Box maxWidth={'30rem'} minWidth='25rem' >
            <Link display='flex' flexDirection='column' gap='0.5rem' underline='none' href={data.url} alignItems='center' target='_blank' rel="noreferrer">
                <img loading='lazy' src={data.img} alt={data.title} style={{ width: '20rem', marginBlock: '1rem', borderRadius: '0.8rem' }} />
                <Typography textTransform='capitalize' letterSpacing='1.5px' textAlign='center' fontSize='1.5rem' variant='h4' color={"#000"}>{data.title}</Typography>
                <Typography m='auto' textAlign='center' maxWidth='30rem' variant='h5' fontSize='1rem' color={"#000"}>{data.description}</Typography>
            </Link>
        </Box>
    )
}
export default WebCard