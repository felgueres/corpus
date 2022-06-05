import { useEffect, useState } from 'react'

export default function useSearch(searchParams,pathname) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;

      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api${pathname}?${searchParams}`,
        {
          method: 'GET'
        })
        response = await response.json()
        setData(response)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ searchParams, pathname ])

  return { data , loading}
}