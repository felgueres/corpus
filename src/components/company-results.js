import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import { usePathname } from "../utils/utils";
import useSearch from "./useSearch";
import { useNavigateSearch } from "./useNavigateSearch";


export const CompanyResults = () => {
    let [searchParams,] = useSearchParams();
    let pathname = usePathname();
    let { data, loading } = useSearch(searchParams, pathname);
    const navigateSearch = useNavigateSearch()
    
    const HitItem = ({ h }) => {
        let params = {'q': h.cik, 'collection':'summaryV2', 'limit': 0}
        return (<>
            <tr>
                <td><button className="link-button" onClick={() => navigateSearch('/transcript', params)}> {h.symbol} </button></td>
                <td>{h.role}</td>
                <td>{h.period}</td>
                <td>{h.label}</td>
            </tr>
        </>
        )
    }

    if (loading) {
        return <>
            <SkeletonHit />
        </>
    }

    if (data.length === 0) {
        return <></>
    }

    return (<>
        <tr id='spacer-h-10' />
        <tr><td>Showing results for: <b>{searchParams.get('q')}</b></td></tr>
        <tr id='spacer-h-10' />
        <tr>
            <td>
                <table id='company-results-table'>
                    <tbody>
                        <tr>
                            <th id='symbol'>Symbol</th>
                            <th>Mentions</th>
                            <th>Period</th>
                            <th>Sentiment</th>
                        </tr>
                        {Object.entries(data).map(([k, v],) => <HitItem key={k} h={v} />)}
                    </tbody>
                </table>
            </td>
        </tr>
    </>
    )
};
