import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, InfiniteHits, RefinementList, CurrentRefinements } from 'react-instantsearch-hooks-web';

const INDEXNAME = 'mvpV2'

export const AlgoliaSearch = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  function Hit({ hit }) {
    return (
      <article>
        <span>Role: {hit.role}</span>
        <span>Company: {hit.company_name} ({hit.symbol}) </span>
        <p>Document: Earnings Call Transcript Summary</p>
        <ul>
          {JSON.parse(hit.jsummary).map(e => <span>{e}<br /><br /></span>)}
        </ul>
        <br />
        <div>{hit.words.map(e => { return <span className="keyword-pill">{e}</span> })}</div>
      </article>
    );
  }

  return (
    <div id="search">
      <InstantSearch searchClient={searchClient} indexName={INDEXNAME}>
        <div id="two-col-search-frame">
          <div><SearchBox id='search-form-algolia' placeholder={'Search companies, people, or keywords'} /></div>
          <div><CurrentRefinements clearsQuery={true} /></div>
        </div>
        <div id="two-col-frame" className="">
          <div id='search-filters' className="">
            <header>Companies</header>
            <RefinementList operator={'or'} showMore={true} limit={15} showMoreLimit={50} sortBy={['name']} attribute="company_name" />
          </div>
          <div id='search-results'>
            <InfiniteHits showPrevious={false} hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};
export default AlgoliaSearch;
