import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, InfiniteHits, Highlight, RefinementList } from 'react-instantsearch-hooks-web';

const INDEXNAME = 'mvpV2'


export const AlgoliaSearch = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  function Hit({ hit }) {
    return (
      <article id="search-results">
        <p><Highlight attribute='company_name' hit={hit} /> (${hit.symbol})</p>
        <p>{hit.name}, {hit.role} </p>
        <ul>
          {JSON.parse(hit.jsummary).map(e => <span>{e}<br/><br/></span>)}
        </ul>
        <br />
        <div>{hit.words.map(e => { return <span className="keyword-pill">{e}</span> })}</div>
      </article>
    );
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={INDEXNAME}>
      <SearchBox id='search-form-algolia' />
      <div id="two-cols-search-frame">
        <div id='search-filters'>
          <span className="ais-Panel-header">Company</span>
          <RefinementList operator={'and'} showMore={true} showMoreLimit={50} sortBy={['name']} attribute="company_name" />
          <br />
          <span className="ais-Panel-header">Includes</span>
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
