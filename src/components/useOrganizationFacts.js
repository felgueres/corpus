import { useEffect, useState } from 'react'

export default function useOrganizationFacts(organizationId) {
  const [facts, setFacts] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/facts/${organizationId}`)
        response = await response.json()
        setFacts(response)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ organizationId ])

  return { facts, loading}
}
