import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, RefinementList, Pagination, useHits } from 'react-instantsearch-hooks-web';

const INDEXNAME = 'mvpV3'
const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

export const Search = () => {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  function CustomHits(props) {
    const { hits, results} = useHits(props);
    console.log(results)
    let gHits = groupBy(hits, 'company_name')
    let oneHit = Object.entries(gHits).map(([k, v], i) => (v))
    return (cHit(oneHit, results.query))
  }


  function cHit(hits, q) {
    if (hits[0] === undefined) {
      return <span>loading</span>
    }
    if (q ===''){
      return <span>
        <br/>
        Start typing eg. 'supply chain' or click on a company name
        <br/>
        </span>
    }

    let hit = hits[0][0]
    let qualitative = hits[0].filter(i => i.s_type === 'Qualitative')
    let quantitative = hits[0].filter(i => i.s_type === 'Quantitative')
    // RETURNS A LIST OF TABLES

    function hitItem(h) {
      return (
        <li>
          <table>
            <tbody>
              <tr>
                <td id='metadata'>
                  <table>
                    <tbody>
                      <tr>{h.name}</tr>
                      <tr>{h.role}</tr>
                      <tr>{h.period}</tr>
                      <tr>Sentiment <svg height={11} width={12}><circle cx={5} cy={7} r={3} fill={sMap[h.label]}></circle></svg></tr>
                    </tbody>
                  </table>
                </td>
                <td>{h.s}</td>
              </tr>
            </tbody>
          </table>
        </li>
      )
    }

    return (
      <table id='hits-table'>
        <tbody>
          <tr id='spacer-h' />
          <tr><td><span id="hit-title"> {hit.company_name} ({hit.symbol})</span></td></tr>
          {quantitative.length>0 && 
          <tr>
            <td>
              <header>Quantitative</header>
              {quantitative.map(h => hitItem(h))}
            </td>
          </tr>}
          {qualitative.length>0 && <tr>
            <td>
              <header>Qualitative</header>
              {qualitative.map(h => hitItem(h))}
            </td>
          </tr>}
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
          <SearchBox id='search-form' placeholder={'Search aerospace universe (ex. \'supply chain\') ...'} />
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
          <tr id='pagination-table'>
            <td>
              <Pagination showFirst={true} showPrevious={false} />
            </td>
          </tr>
        </tbody>
      </table>
    </InstantSearch>
  );
};
export default Search;
