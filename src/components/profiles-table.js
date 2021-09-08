import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const ProfilesTable = (props) => {
  const [cardsInformation, setCardsInformation] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations`);
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  const renderRow = (idx, card) => {
    return (
      <tr key={idx}>
        <td><a className='table-child' href={`profiles/${card.company_name}`}>{card.short_name}</a></td>
      </tr>
    )
  }

  const buildTable = (cardsInformation) => {
    return (
        <table className="table table-sm hover">
          <thead>
            <tr>
              <th className='table-title'>Directory</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(cardsInformation).map(([idx, card],) => renderRow(idx, card))}
          </tbody>
        </table>
    )
  }

  const spinner = () => {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>)
  }

  useEffect(() => {
    if (!cardsInformation) fetchClimateRisks();
  }, []);

  if (!cardsInformation) {
    return spinner()
  }

  if (fetchError) {
    return <div className="mt-3">Unable to fetch data.</div>
  }
  return (
    <div className="mt-3">
      {buildTable(cardsInformation)}
    </div>
  );
};

export default ProfilesTable;