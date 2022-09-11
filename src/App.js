import { fetchData, options } from './utils/fetchData'
import { useState, useEffect } from 'react'
import { webs } from './utils/webUrls'
import WebList from './components/WebList'

const App = () => {

  const [metaData, setMetaData] = useState([])

  useEffect(() => {
    const metaTagData = () => {
      setMetaData([])
      const openGraphUrl = 'https://og-link-preview.p.rapidapi.com/?url=';
      webs.forEach(async (e) => {
        const data = await fetchData(`${openGraphUrl}${e}`, options);
        setMetaData((prev) => [...prev, { title: data.title, url: data.domain, img: data.cover, description: data.description }])
      })
    }
    metaTagData()
  }, [webs])

  return (
    // <Box m='2rem' display='flex' alignItems='center' gap='2rem' className="container">
    //   {
    //     metaData.map((i, index) => (
    //       <Box key={index}>
    //         <Link display='flex' flexDirection='column' placeItems='center' underline='none' href={i.url} target='_blank' rel="noreferrer">
    //           <img src={i.img} alt={i.title} style={{ width: '19rem', margin: 'auto' }} />
    //           <Typography textAlign='center' fontSize='1.5rem' variant='h4' color={"#000"}>{i.title}</Typography>
    //           <Typography m='auto' textAlign='center' maxWidth='24rem' variant='h5' fontSize='1rem' color={"#000"}>{i.description}</Typography>
    //         </Link>
    //       </Box>
    //     ))
    //   }
    // </Box >
    <>
      <WebList data={metaData} />
    </>
  )
}

export default App