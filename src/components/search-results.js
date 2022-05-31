import Hit from '../utils/search-utils/Hit'

export const SearchResults = () => {

    function CustomHits(props) {
        const { hits, results } = useHits(props);
        let groupedHits = groupBy(hits, 'company_name')
        let Hits = Object.entries(groupedHits).map(([k, v],) => Hit(k, v))
        return (<table>{Hits}</table>)
    }

    return (<CustomHits />)
};
