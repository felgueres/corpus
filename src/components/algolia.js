import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight, RefinementList } from 'react-instantsearch-hooks-web';

export const AlgoliaSearch = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);
  console.log(process)

  function Hit({ hit }) {
    console.log(hit)
    return (
      <article>
        <p>{hit.name}, {hit.role} </p>
        <p><Highlight attribute='summary' hit={hit} />{hit.p}</p>
      </article>
    );
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="mvpV1">
      <SearchBox id='search-form-algolia' />
      <div id="two-cols-search-frame">
        <div id='search-filters'>
          <span className="ais-Panel-header">Company</span>
          <RefinementList attribute="company_name" />
          <span className="ais-Panel-header">Role</span>
          <RefinementList attribute="role" />
          <span className="ais-Panel-header">Section</span>
          <RefinementList attribute="section" />
          <span className="ais-Panel-header">Industry</span>
          <RefinementList attribute="industry" />
          <span className="ais-Panel-header">Keywords</span>
          <RefinementList attribute="words" />
        </div>
        <div>
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearch>
  );
};

export default AlgoliaSearch;
