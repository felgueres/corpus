import { useEffect, useState } from 'react'

export default function useInsights(organizationId) {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/insights/${organizationId}`)
        response = await response.json()
        setInsights(response)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ organizationId ])

  return { insights, loading}
}
