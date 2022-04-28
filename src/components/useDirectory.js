import { useEffect, useState } from 'react'
import CATEGORIES from '../utils/constants';

export default function useDirectory() {
  const c = Object.entries(CATEGORIES).map(([,v],)=>v)
  const categoryIds = c.map(e => e.sic)
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/directory`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ categoryIds })
        })
        response = await response.json()
        setCompanies(response)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [])

  return { companies, loading}
}
