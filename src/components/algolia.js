import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, InfiniteHits, Highlight, RefinementList, Pagination } from 'react-instantsearch-hooks-web';

export const AlgoliaSearch = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  function Hit({ hit }) {
    return (
      <article id="search-results">
        <p><Highlight attribute='company_name' hit={hit}/></p>
        <p>{hit.name}, {hit.role} </p>
        <div className="ais-Highlight"><Highlight attribute='summary' hit={hit}/>{hit.p}</div>
        <br/>
        <div>{hit.words.map(e=>{return <span className="keyword-pill">{e}</span>})}</div>
      </article>
    );
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="mvpV1">
      <SearchBox id='search-form-algolia' />
      <div id="two-cols-search-frame">
        <div id='search-filters'>
          <span className="ais-Panel-header">Company</span>
          <RefinementList operator={'and'} showMore={true} showMoreLimit={50} sortBy={['name']} attribute="company_name" />
          <span className="ais-Panel-header">Section</span>
          <RefinementList attribute="section" />
          <span className="ais-Panel-header"></span>
          <RefinementList attribute="p_type" />
        </div>
        <div>
          <InfiniteHits showPrevious={false} hitComponent={Hit} />
        </div>
      </div>
    </InstantSearch>
  );
};

export default AlgoliaSearch;
