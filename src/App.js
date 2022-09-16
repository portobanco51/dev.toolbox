import { fetchData, designOptions, codeOptions } from './utils/fetchData'
import { useState, useEffect } from 'react'
import { designWebs, codeWebs } from './utils/webUrls'
import WebList from './components/WebList'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  const [designMetaData, setDesignMetaData] = useState([])
  const [codeMetaData, setCodeMetaData] = useState([])

  useEffect(() => {
    const metaTagData = () => {
      setDesignMetaData([])
      setCodeMetaData([])
      const openGraphUrl = 'https://og-link-preview.p.rapidapi.com/?url=';
      designWebs.forEach(async (e) => {
        const data = await fetchData(`${openGraphUrl}${e}`, designOptions);
        setDesignMetaData((prev) => [...prev, { title: data.title, url: data.domain, img: [data.cover || data.favicon], description: data.description }])
      })
      codeWebs.forEach(async (e) => {
        const data = await fetchData(`${openGraphUrl}${e}`, codeOptions);
        setCodeMetaData((prev) => [...prev, { title: data.title, url: data.domain, img: data.cover, description: data.description }])
      })
    }
    metaTagData()
  }, [])

  return (
    <>
      <Header />
      <WebList designData={designMetaData} codeData={codeMetaData} />
      <Footer />
    </>
  )
}

export default App