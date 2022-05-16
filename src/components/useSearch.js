import { useEffect, useState } from 'react'

export default function useSearch(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/search/${query}`)
        response = await response.json()
        setData(response)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ query ])

  return { data , loading}
}