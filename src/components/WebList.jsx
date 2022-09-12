import { Box } from '@mui/system'
import WebCard from './WebCard'

const WebList = ({ data }) => {
    return (
        <Box minHeight='65vh' m='2rem' minWidth='320px' flexWrap='wrap' display='flex' alignItems='center' justifyContent='center' gap='2rem' className="container-weblist">
            {
                data?.map((e, i) => (
                    <WebCard key={i} data={data[i]} />
                ))
            }
        </Box >
    )
}
export default WebList