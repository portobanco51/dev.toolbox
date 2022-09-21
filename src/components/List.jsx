import { Box, Typography } from '@mui/material'
import Loader from './Loader'
import WebCard from './WebCard'

const List = ({ data, name, id }) => {
    return (
        <Box id={id} >
            <Typography letterSpacing='4px' variant='h3' fontSize='2.5rem' textAlign='center' color='#e0fffb' my='2rem' >{name}<span className='span-list' >.tools</span></Typography>

            {data.length === 0 ? <Loader />
                : <Box mx='auto' maxWidth='80vw' flexWrap='wrap' display='flex' alignItems='center' alignContent='flex-start' justifyContent='center' gap='2rem' className="container-weblist">
                    {
                        data?.map((e, i) => (
                            <WebCard key={i} data={e} />
                        ))
                    }
                </Box >}
        </Box>
    )
}
export default List