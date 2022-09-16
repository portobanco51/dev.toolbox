import { Box } from '@mui/material'
import List from './List'

const WebList = ({ designData, codeData }) => {
    return (
        <>
            <Box maxWidth='80vw' mx='auto' display='flex' flexDirection='column' gap='2rem'>

                <List data={designData} name='Design' icon={'🎨'} />
                <List data={codeData} name='Code' icon={'💻'} />

                {/* <Typography letterSpacing='4px' id='designtools' variant='h3' fontSize='2.5rem' textAlign='center' color='#e0fffb' mt='2rem' >🎨 Design<span className='span-list' >.tools 🎨</span></Typography>

                {designData.length === 0 ? <Loader />
                    : <Box my='2rem' mx='auto' maxWidth='80vw' flexWrap='wrap' display='flex' alignItems='center' alignContent='flex-start' justifyContent='center' gap='2rem' className="container-weblist">
                        {
                            designData?.map((e, i) => (
                                <WebCard key={i} data={designData[i]} />
                            ))
                        }
                    </Box >}

                <Typography fontSize='2.5rem' letterSpacing='4px' id='codetools' variant='h3' textAlign='center' color='#e0fffb' mt='2rem' >💻 Code<span className='span-list' >.tools 💻</span></Typography>

                {codeData.length === 0 ? <Loader />
                    : <Box my='2rem' mx='auto' maxWidth='80vw' flexWrap='wrap' display='flex' alignItems='center' alignContent='flex-start' justifyContent='center' gap='2rem' className="container-weblist">
                        {
                            codeData?.map((e, i) => (
                                <WebCard key={i} data={codeData[i]} />
                            ))
                        }
                    </Box >} */}
            </Box>
        </>
    )
}
export default WebList