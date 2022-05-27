import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, InfiniteHits, RefinementList, Highlight } from 'react-instantsearch-hooks-web';

const INDEXNAME = 'mvpV3'

const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

export const AlgoliaSearch = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  function Hit({ hit }) {
    return (
      <table style={{ 'width': '100%' }}>
        <tr>
          <span id="hit-title"> {hit.company_name} </span>
          <Highlight attribute='s' hit={hit} />
        </tr>
        <table id='metadata'>
          <tr>
            <td>
              {hit.name} {hit.role} {' | '} {`$${hit.symbol}`} {' | '} {hit.period} {' | '} {hit.industry} {' | '} {hit.s_type} {' | '} Sentiment
              <svg height={11} width={12}><circle cx={7} cy={5} r={4} fill={sMap[hit.label]}></circle></svg>{' | '}
              {hit.is_summary ? <span>Summary<span className="beta-pill">Beta</span></span> : 'Transcript'}
            </td>
          </tr>
        </table>
      </table >
    );
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={INDEXNAME}>
      <table id='search-table' style={{ 'width': '100%'}}>
        <tr id='spacer-h' />
        <tr><SearchBox id='search-form-algolia' placeholder={'Search companies, people, or keywords'}/></tr>
        <tr id='spacer-h' />
        <tr>
          <td id='search-results'>
            <InfiniteHits showPrevious={false} hitComponent={Hit} />
          </td>
          <td id='spacer-w'/>
          <td id='search-filters'>
            <table id='search-filters-table'>
              <tr>
                <td>
                  <header>Sentiment Analysis</header>
                  <RefinementList operator={'and'} attribute="label" />
                  <tr id='spacer-h'/>
                  <header>Statement Type</header>
                  <RefinementList operator={'and'} attribute="s_type" />
                  <tr id='spacer-h'/>
                  <header><span>Summary<span className="beta-pill">Beta</span></span></header>
                  <RefinementList operator={'and'} attribute="is_summary" />
                  <tr id='spacer-h'/>
                  <header>Industry</header>
                  <RefinementList operator={'and'} attribute="industry" />
                  <tr id='spacer-h'/>
                  <header>Keywords</header>
                  <RefinementList operator={'and'} attribute="kwords" />
                </td>
                <td style={{ 'width': '150px' }}>
                  <header>Companies</header>
                  <RefinementList operator={'and'} limit={50} sortBy={['name']} attribute="company_name" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </InstantSearch>
  );
};
export default AlgoliaSearch;

// <div>{hit.kwords.map(e => { return <span className="keyword-pill">{e}</span> })}</div>
// <CurrentRefinements clearsQuery={true} />