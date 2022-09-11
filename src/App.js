import { fetchData, options } from './utils/fetchData'
import { useState, useEffect } from 'react'
import { webs } from './utils/webUrls'
import WebList from './components/WebList'
import Header from './components/Header'

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
  }, [])

  return (
    <>
      <Header />
      <WebList data={metaData} />
    </>
  )
}

export default App