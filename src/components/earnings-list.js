import useSearch from "./useSearch";
import { useNavigateSearch } from "./useNavigateSearch";

const SummaryRow = ({ d }) => {
    let params = {'q': d.cik, 'collection':'summaryV2', 'limit': 0}
    const navigateSearch = useNavigateSearch()
    return (<>
        <tr>
            <td><button className="link-button" onClick={() => navigateSearch('/transcript', params)}> {d.symbol} </button></td>
            <td className="truncate">{d.company_name}</td>
            <td className="truncate">
                {d.s}
            </td>
        </tr>
    </>)
}

export const EarningsList = () => {
    let pathname = '/latest'
    let searchParams = new URLSearchParams({ 'collection': 'summaryV2', 'limit': '5' }).toString()
    let { data, loading } = useSearch(searchParams, pathname);

    if (loading) {
        return <></>
    }

    return (
        <tr>
            <td>
                <table id='ec-summaries'>
                    <tbody>
                        <tr>
                            <th colSpan={2}>Earnings Transcripts</th>
                            <th>Summary</th>
                        </tr>
                        {data.map((d,i) => <SummaryRow d={d} key={i} />)}
                        <tr>
                            <td colSpan={3} className="showmore">
                                <button>Show all »</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>)
}