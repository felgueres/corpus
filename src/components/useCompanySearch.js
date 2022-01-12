import { useEffect, useState } from 'react'

export default function useCompanySearch(filters, pageNumber) {
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [loadingCompanyData, setLoadingCompanyData] = useState(true)
  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoadingCompanyData(true)
      try {
        let response = await fetch(`${apiUrl}/api/stocks`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filters, pageNumber })
        })
        response = await response.json()
        setCompanies(response.companies)
        setPagination(response.pagination)
        setLoadingCompanyData(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [filters, pageNumber])

  return { companies, pagination, loadingCompanyData }
}
