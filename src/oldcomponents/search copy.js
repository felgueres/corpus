import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, RefinementList, Pagination, useHits } from 'react-instantsearch-hooks-web';
import { groupBy } from "../utils/utils";

const INDEXNAME = 'mvpV3'
const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

export const Search = () => {
  const algoliaClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ACCOUNT, process.env.REACT_APP_ALGOLIA_ID);

  const searchClient = {
    ...algoliaClient,
    search(requests){
      if(requests.every(({params})=> !params.query)){
        return []
      }
      return algoliaClient.search(requests)
    },
  };

  function CustomHits(props) {
    const { hits, results} = useHits(props);
    let groupedHits = groupBy(hits, 'company_name')
    let Hits = Object.entries(groupedHits).map(([k, v],) => Hit(k, v))
    return (
      <table>
        {Hits}
      </table>
    )
  }

  function Hit(k, v) {
    let qualitative = v.filter(i => i.s_type === 'Qualitative')
    let quantitative = v.filter(i => i.s_type === 'Quantitative')

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
                      <tr>{h.is_summary ? 'Summary' : 'Transcript'}</tr>
                    </tbody>
                  </table>
                </td>
                <td style={{'verticalAlign':'middle'}}>{h.s}</td>
              </tr>
            </tbody>
          </table>
        </li>
      )
    }

    return (
      <table id='hits-table'>
        <tbody>
          <tr><td><span id="hit-title"> {k} </span></td></tr>
          {quantitative.length > 0 &&
            <tr>
              <td id='subsection-a'>
                <header>Quantitative</header>
                {quantitative.map(h => hitItem(h))}
              </td>
            </tr>}
          {qualitative.length > 0 && <tr>
            <td id='subsection-b'>
              <header>Qualitative</header>
              {qualitative.map(h => hitItem(h))}
            </td>
          </tr>}
          <tr id='spacer-h' />
        </tbody>
      </table >
    );
  }

  const handleClick = event => {
    event.currentTarget.querySelector('.plus').classList.toggle('not-visible')
    event.currentTarget.querySelector('.minus').classList.toggle('not-visible')
    event.currentTarget.querySelector('.ais-RefinementList').classList.toggle('not-visible')
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={INDEXNAME}>
      <table id='search-table'>
        <tbody>
          <tr>
            <td>
              <table id='searchform-table'>
                <tr><td>
                  <SearchBox id='search-form' queryHook={(query, search) => { if(query.length>3){search(query)}}} placeholder={'Search aerospace companies, people or keywords ...'} />
                </td></tr>
              </table>
            </td>
          </tr>
          {true && 
          <tr>
            <table>
              <tbody>
                <tr>
                  <td>
                    <table id='search-filters-table' className="notvisible">
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <span className='filter-list' onClick={handleClick}>
                                  <span className="filter-header">
                                    <span className="plus">▸ </span>
                                    <span className="minus not-visible">▾ </span>
                                    <span>Sentiment Analysis</span>
                                  </span>
                                  <RefinementList className='not-visible' operator={'and'} attribute="label" />
                                </span>
                              </tr>
                              <tr>
                                <span className='filter-list' onClick={handleClick}>
                                  <span className="filter-header">
                                    <span className="plus">▸ </span>
                                    <span className="minus not-visible">▾ </span>
                                    <span>Statement Type</span>
                                  </span>
                                  <RefinementList className='not-visible' operator={'and'} attribute="s_type" />
                                </span>
                              </tr>
                              <tr>
                                <span className='filter-list' onClick={handleClick}>
                                  <span className="filter-header">
                                    <span className="plus">▸ </span>
                                    <span className="minus not-visible">▾ </span>
                                    <span>Keywords</span>
                                  </span>
                                  <RefinementList className='not-visible' operator={'and'} attribute="kwords" />
                                </span>
                              </tr>
                              <tr>
                                <span className='filter-list' onClick={handleClick}>
                                  <span className="filter-header">
                                    <span className="plus">▸ </span>
                                    <span className="minus not-visible">▾ </span>
                                    <span>Companies</span>
                                  </span>
                                  <RefinementList className='not-visible' operator={'and'} limit={50} sortBy={['name']} attribute="company_name" />
                                </span>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td id='search-results'>
                    <table>
                      <tbody>
                        <tr>
                          <CustomHits />
                          <tr id='pagination-table'>
                            <td>
                              <Pagination showFirst={true} showPrevious={false} />
                            </td>
                          </tr>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </tr>}
        </tbody>
      </table>
    </InstantSearch>
  );
};
export default Search;
