import { useEffect, useState } from 'react'

export default function useMetadata() {
  const [sectors, setSectors] = useState(null)
  const [riskTypes, setRiskTypes] = useState(null)
  const [loadingMetadata, setLoadingMetadata] = useState(true)

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    async function fetchAPI() {
      setLoadingMetadata(true)
      try {
        let response = await fetch(`${apiUrl}/api/metadata`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        response = await response.json()
        setSectors(response[0]['sectors'])
        setRiskTypes(response[0]['risk_types'])
        setLoadingMetadata(false)
      } catch (error) {

      }
    }
    fetchAPI()
  }, [])


  return { sectors, riskTypes, loadingMetadata }
}
