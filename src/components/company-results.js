import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import useSearch from "./useSearch";

const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

const HitItem = ({ h }) => {
    return (<>
        <tr>
            <td>{h.company_name}</td>
            <td>{h.symbol}</td>
            <td>{h.name}</td>
            <td>{h.role}</td>
            <td>{h.period}</td>
            <td><svg height={11} width={12}><circle cx={5} cy={7} r={3} fill={sMap[h.label]}></circle></svg></td>
            <td><a href='/'>Section</a></td>
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
                            <th>Symbol</th>
                            <th>Person</th>
                            <th>Role</th>
                            <th></th>
                            <th>Sentiment</th>
                            <th>Section</th>
                        </tr>
                        {Object.entries(data).map(([k, v],) => <HitItem key={k} h={v} />)}
                    </tbody>
                </table>
            </td>
        </tr>
    </>
    )
};
