import { useEffect, useState } from 'react'

export default function useOrganizationProfile(organizationId) {
  const [organizationData, setOrganizationData] = useState(null);
  const [loadingCompanyData, setLoadingCompanyData] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoadingCompanyData(true)
      try {
        let response = await fetch(`${apiUrl}/api/organizations/${organizationId}`)
        response = await response.json()
        setOrganizationData(response)
        setLoadingCompanyData(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [ organizationId ])

  return { organizationData, loadingCompanyData }
}
