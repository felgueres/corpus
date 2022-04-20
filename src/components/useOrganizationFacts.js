import { useEffect, useState } from 'react'

export default function useOrganizationFacts(organizationId) {
  const [organizationFacts, setOrganizationFacts] = useState(null);
  const [loadingCompanyFacts, setLoadingCompanyFacts] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoadingCompanyFacts(true)
      try {
        let response = await fetch(`${apiUrl}/api/facts/${organizationId}`)
        response = await response.json()
        setOrganizationFacts(response)
        setLoadingCompanyFacts(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ organizationId ])

  return { organizationFacts, loadingCompanyFacts}
}
