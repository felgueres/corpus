import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import useSearch from "./useSearch";

const HitItem = ({ h }) => {
    return (<>
        <tr>
            <td>{h.company_name}</td>
            <td id="symbol">{h.symbol}</td>
            <td>{h.role}</td>
            <td>{h.period}</td>
            <td>{h.label}</td>
        </tr>
    </>
    )
}

export const CompanyResults = () => {
    let [searchParams,] = useSearchParams();
    let { data, loading } = useSearch(searchParams)

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
                            <th>Company</th>
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
