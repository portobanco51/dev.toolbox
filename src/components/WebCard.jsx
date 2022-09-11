import { Box, Link, Typography } from '@mui/material'

const WebCard = ({ data }) => {
    return (
        <Box>
            <Link display='flex' flexDirection='column' underline='none' href={data.url} target='_blank' rel="noreferrer">
                <img src={data.img} alt={data.title} style={{ width: '19rem', margin: 'auto' }} />
                <Typography textAlign='center' fontSize='1.5rem' variant='h4' color={"#000"}>{data.title}</Typography>
                <Typography m='auto' textAlign='center' maxWidth='24rem' variant='h5' fontSize='1rem' color={"#000"}>{data.description}</Typography>
            </Link>
        </Box>
    )
}
export default WebCard