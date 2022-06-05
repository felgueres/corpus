
export const SearchFilters = () => {

  const handleClick = event => {
    event.currentTarget.querySelector('.plus').classList.toggle('not-visible')
    event.currentTarget.querySelector('.minus').classList.toggle('not-visible')
    event.currentTarget.querySelector('.ais-RefinementList').classList.toggle('not-visible')
  }

return ( 

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
                            {/* <RefinementList className='not-visible' operator={'and'} attribute="label" /> */}
                        </span>
                    </tr>
                    <tr>
                        <span className='filter-list' onClick={handleClick}>
                            <span className="filter-header">
                                <span className="plus">▸ </span>
                                <span className="minus not-visible">▾ </span>
                                <span>Statement Type</span>
                            </span>
                            {/* <RefinementList className='not-visible' operator={'and'} attribute="s_type" /> */}
                        </span>
                    </tr>
                    <tr>
                        <span className='filter-list' onClick={handleClick}>
                            <span className="filter-header">
                                <span className="plus">▸ </span>
                                <span className="minus not-visible">▾ </span>
                                <span>Keywords</span>
                            </span>
                            {/* <RefinementList className='not-visible' operator={'and'} attribute="kwords" /> */}
                        </span>
                    </tr>
                    <tr>
                        <span className='filter-list' onClick={handleClick}>
                            <span className="filter-header">
                                <span className="plus">▸ </span>
                                <span className="minus not-visible">▾ </span>
                                <span>Companies</span>
                            </span>
                            {/* <RefinementList className='not-visible' operator={'and'} limit={50} sortBy={['name']} attribute="company_name" /> */}
                        </span>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</table>)
};
