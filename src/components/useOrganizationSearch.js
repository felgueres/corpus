import { useEffect, useState } from 'react'

export default function useOrganizationSearch(query, pageNumber) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const response = await fetch(`${apiUrl}/api/search`,{
        method: 'GET',
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'},});
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setFetchError(error.message);
    }
  }, [query, pageNumber])

  return null
}
