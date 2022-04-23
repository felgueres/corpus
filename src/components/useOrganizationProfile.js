import { useEffect, useState } from 'react'

export default function useOrganizationProfile(organizationId) {
  const [ data , setData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/organizations/${organizationId}`)
        response = await response.json()
        setData(response)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ organizationId ])

  return { data , loading }
}
