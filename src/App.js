import { fetchData, options } from './utils/fetchData'
import { useState, useEffect } from 'react'
import { webs } from './utils/webUrls'
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
  console.log(metaData)

  return (
    <>
      {metaData.map((i, index) => (
        <div key={index}>
          <a href={i.url} target='_blank' rel="noreferrer">
            <img src={i.img} alt={i.title} style={{ width: '19rem' }} />
            <li>{i.title}</li>
            <li>{i.description}</li>
          </a>
        </div>
      ))}
    </>
  )
}

export default App