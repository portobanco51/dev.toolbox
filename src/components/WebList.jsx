import { Box } from '@mui/material'
import List from './List'

const WebList = ({ designData, codeData }) => {
    return (
        <>
            <Box maxWidth='80vw' mx='auto' display='flex' flexDirection='column' gap='2rem'>
                <List id='designtools' data={designData} name='Design' icon={'🎨'} />
                <List id='codetools' data={codeData} name='Code' icon={'💻'} />
            </Box>
        </>
    )
}
export default WebList