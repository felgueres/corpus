import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList, Highlight, Pagination, useHits } from 'react-instantsearch-hooks-web';

const INDEXNAME = 'mvpV3'

const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

export const AlgoliaSearch = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  function CustomHits(props) {
    const { hits, results, sendEvent } = useHits(props);
    let gHits = groupBy(hits,'company_name')
    let oneHit = Object.entries(gHits).map(([k,v],i)=>(v)) 
    return (cHit(oneHit))
  }

  // {'tesla': [object1, object2, object3, object4]}
  // obj1 = {'index','name','symbol','industry', 'cik'}

  function cHit(hits) {
    if (hits[0] === undefined){
      return <span>loading</span>
    }
    let hit = hits[0][0]
    console.log(hits.map(x=>x))

    return (
      <table style={{ 'width': '100%' }}>
        <tbody>
          <tr id='spacer-h' />
          <tr>
            <span id="hit-title"> {hit.company_name} </span>
            <span style={{'fontSize':'13px'}}>
              {hits[0].map(x=><span>{x.s}<br/><br/></span>)}
            </span>
            {/* <Highlight attribute='s' hit={hit} /> */}
          </tr>
          <tr id='metadata'>
            <td>
              {hit.name} {hit.role} {' | '} {`${hit.company_name}`} {' | '} {hit.period}
              {' | '}
              {hit.industry} {' | '} {hit.s_type} {' | '} Sentiment
              <svg height={11} width={12}><circle cx={7} cy={5} r={4} fill={sMap[hit.label]}></circle></svg>{' | '}
              {hit.is_summary ? <span>Summary<span className="beta-pill">Beta</span></span> : 'Transcript'}
            </td>
          </tr>
          <tr id='spacer-h' />
        </tbody>
      </table >
    );
  }


  function Hit({ hit }) {
    return (
      <table style={{ 'width': '100%' }}>
        <tbody>
          <tr id='spacer-h' />
          <tr>
            <span id="hit-title"> ${hit.symbol} </span>
            <Highlight attribute='s' hit={hit} />
          </tr>
          <tr id='metadata'>
            <td>
              {hit.name} {hit.role} {' | '} {`${hit.company_name}`} {' | '} {hit.period}
              {' | '}
              {hit.industry} {' | '} {hit.s_type} {' | '} Sentiment
              <svg height={11} width={12}><circle cx={7} cy={5} r={4} fill={sMap[hit.label]}></circle></svg>{' | '}
              {hit.is_summary ? <span>Summary<span className="beta-pill">Beta</span></span> : 'Transcript'}
            </td>
          </tr>
          <tr id='spacer-h' />
        </tbody>
      </table >
    );
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={INDEXNAME}>
      <table id='search-table'>
        <tbody>
        <tr id='spacer-h' />
          <SearchBox id='search-form-algolia' placeholder={'Search aerospace...'} />
        <tr>
          <td id='search-results'>
            <CustomHits />
           </td>
          <td id='spacer-w' />
          <td id='search-filters'>
            <table id='search-filters-table'>
              <tr>
                <td>
                  <header>Sentiment Analysis</header>
                  <RefinementList operator={'and'} attribute="label" />
                  <tr id='spacer-h' />
                  <header>Statement Type</header>
                  <RefinementList operator={'and'} attribute="s_type" />
                  <tr id='spacer-h' />
                  <header><span>Summary<span className="beta-pill">Beta</span></span></header>
                  <RefinementList operator={'and'} attribute="is_summary" />
                  <tr id='spacer-h' />
                  <header>Industry</header>
                  <RefinementList operator={'and'} attribute="industry" />
                  <tr id='spacer-h' />
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
        {/* <tr id='pagination-table'>
          <td>
            <Pagination showFirst={true} showPrevious={false} />
          </td>
        </tr> */}
        </tbody>
      </table>
    </InstantSearch>
  );
};
export default AlgoliaSearch;
