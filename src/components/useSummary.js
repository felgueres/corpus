import { useEffect, useState } from 'react'

export default function useSummary(organizationId) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/summary/${organizationId}`)
        response = await response.json()
        setSummary(response)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ organizationId ])

  return { summary , loading}
}
