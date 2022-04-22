import { useEffect, useState } from 'react'

export default function useCategorySearch(categoryId, pageNumber) {
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ categoryId , pageNumber })
        })
        response = await response.json()
        setCompanies(response.companies)
        setPagination(response.pagination)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [categoryId, pageNumber])

  return { companies, pagination, loading}
}
