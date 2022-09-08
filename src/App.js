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
        setMetaData(prevData => { return [...prevData, { data }] })
      })
    }
    metaTagData()
    console.log(metaData)
  }, [])

  return (
    <>
      {metaData.map((i, index) => (
        <div key={index}>
          <a href={i.data.domain} target='_blank' rel="noreferrer">
            <img src={i.data.cover} alt={i.data.title} style={{ width: '19rem' }} />
            <li>{i.data.title}</li>
            <li>{i.data.description}</li>
          </a>
        </div>
      ))}
    </>
  )
}

export default App