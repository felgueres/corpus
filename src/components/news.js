import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const News = () => {
  const [newsInformation, setNewsInformation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateNews= async () => {
    try {
      const response = await fetch(`${apiUrl}/api/google-search`);
      const responseData = await response.json();
      setNewsInformation(responseData);
    } catch (error) {
      setNewsInformation(error.message);
    }
  };

  const newsItem = (idx, newsEntry) => {
    return (<div class="d-flex text-muted pt-3">
      <p class="pb-3 mb-0 small lh-sm border-bottom">
        <a class="d-block" href={newsEntry.link}>{newsEntry.title}</a>
        {newsEntry.snippet}
      </p>
    </div>)
  }


  useEffect(() => { if (!newsInformation) { fetchClimateNews() } }, []);

  if (!newsInformation) {
    return 'loading...'
  }

  return (
    <div class="my-3 p-3 border rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Recent updates</h6>
      {Object.entries(newsInformation).map(([idx, card],) => newsItem(idx, card))}
    </div>
  );
};

export default News;