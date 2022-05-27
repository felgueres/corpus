import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, InfiniteHits, RefinementList, CurrentRefinements, useConnector } from 'react-instantsearch-hooks-web';

const INDEXNAME = 'mvpV3'

export const AlgoliaSearch = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  function Hit({ hit }) {
    return (
      <article>
        <div id='hit-title'>
          <span>{hit.company_name} ({hit.symbol}) {'>'} {hit.name} - {hit.role}</span>
        </div>
        <span>{hit.s}</span>
        <div className="source">Date: {hit.period}</div>
      </article>
    );
  }

  return (
    <div id="search">
      <InstantSearch searchClient={searchClient} indexName={INDEXNAME}>
        <div id="two-col-search-frame">
          <div>
            <SearchBox id='search-form-algolia' placeholder={'Search companies, people, or keywords'} />
            <div id='search-results'><InfiniteHits showPrevious={false} hitComponent={Hit} /></div>
          </div>
          <div>
            <div id="search-filters">
              <CurrentRefinements clearsQuery={true} />
              <header>Companies</header>
              <RefinementList operator={'or'} showMore={true} limit={15} showMoreLimit={50} sortBy={['index']} attribute="company_name" />
              <header>Sentiment</header>
              <RefinementList operator={'and'} attribute="label" />
            </div>
          </div>
        </div>

      </InstantSearch>
    </div>
  );
};
export default AlgoliaSearch;

        // <div id="two-col-search-frame">
        //   <div><SearchBox id='search-form-algolia' placeholder={'Search companies, people, or keywords'} /></div>
        //   <div><CurrentRefinements clearsQuery={true} /></div>
        // </div>
        // <div id="two-col-frame" className="">
        //   <div id='search-filters' className="">
        //     <header>Companies</header>
        //     <RefinementList operator={'or'} showMore={true} limit={15} showMoreLimit={50} sortBy={['name']} attribute="company_name" />
        //   </div>
        //   <div id='search-results'>
        //     <infinitehits showprevious={false}  />
        //   </div>
        // </div>
        // <div>{hit.kwords.map(e => { return <span className="keyword-pill">{e}</span> })}</div>