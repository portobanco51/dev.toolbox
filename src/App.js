import { fetchData, options } from './utils/fetchData'
import { useState, useEffect } from 'react'
import { webs } from './utils/webUrls'
const App = () => {

  const [metaData, setMetaData] = useState({})

  useEffect(() => {
    const metaTagData = () => {
      const openGraphUrl = 'https://apic-opengraph.p.rapidapi.com/?url=';
      webs.map(async (e) => {
        const data = await fetchData(`${openGraphUrl}${e}`, options);
        setMetaData(data)
      })
    }
    metaTagData()
    console.log(metaData)
  }, [webs])

  return (
    <>
      <p>{ }</p>
    </>
  )
}

export default App