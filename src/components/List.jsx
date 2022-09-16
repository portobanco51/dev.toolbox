import { Box, Typography } from '@mui/material'
import Loader from './Loader'
import WebCard from './WebCard'

const List = ({ data, name, icon }) => {
    return (
        <div>
            <Typography letterSpacing='4px' id='designtools' variant='h3' fontSize='2.5rem' textAlign='center' color='#e0fffb' mt='2rem' >{icon} {name}<span className='span-list' >.tools</span> {icon}</Typography>

            {data.length === 0 ? <Loader />
                : <Box my='2rem' mx='auto' maxWidth='80vw' flexWrap='wrap' display='flex' alignItems='center' alignContent='flex-start' justifyContent='center' gap='2rem' className="container-weblist">
                    {
                        data?.map((e, i) => (
                            <WebCard key={i} data={data[i]} />
                        ))
                    }
                </Box >}
        </div>
    )
}
export default List