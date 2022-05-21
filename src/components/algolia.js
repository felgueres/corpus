import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight, Menu } from 'react-instantsearch-hooks-web';

export const AlgoliaSearch = () => {
  const searchClient = algoliasearch('9N09TDQ25A', '5ad74991d67720596b7116b0f453c9b0');

  function Hit({ hit }) {
    console.log(hit)
    return (
      <article>
        <p>{hit.name}, {hit.role} </p>
        <p><Highlight attribute='summary' hit={hit} /> </p>
      </article>
    );
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="summary">
      <SearchBox id='search-form-algolia'/>
      <Menu attribute="role"/>
      <Menu attribute="section"/>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
