import { Box } from '@mui/system'
import WebCard from './WebCard'

const WebList = ({ data }) => {
    return (
        <Box id='tools' minHeight='65vh' my='2rem' mx='auto' maxWidth='80vw' flexWrap='wrap' display='flex' alignItems='center' alignContent='flex-start' justifyContent='center' gap='2rem' className="container-weblist">
            {
                data?.map((e, i) => (
                    <WebCard key={i} data={data[i]} />
                ))
            }
        </Box >
    )
}
export default WebList