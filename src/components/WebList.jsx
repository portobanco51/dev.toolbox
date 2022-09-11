import { Box } from '@mui/system'
import WebCard from './WebCard'

const WebList = ({ data }) => {
    return (
        <Box m='2rem' minWidth='320px' flexWrap='wrap' display='flex' alignItems='center' gap='2rem' className="container">
            {
                data.map((e, i) => (
                    <WebCard key={i} data={data[i]} />
                ))
            }
        </Box >
    )
}
export default WebList