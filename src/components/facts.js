import useSearch from "./useSearch";
import { useNavigateSearch } from "./useNavigateSearch";

const FactsRow = ({ d }) => {
    let params = {'q': d.cik, 'collection':'summaryV2', 'limit': 0}
    const navigateSearch = useNavigateSearch()
    return (<>
        <tr>
            <td><button className="link-button" onClick={() => navigateSearch('/transcript', params)}> {d.symbol} </button></td>
            <td className="truncate">
                {d.s}
            </td>
        </tr>
    </>)
}

export const Facts = () => {
    let pathname = '/facts'
    let searchParams = new URLSearchParams({ 'collection': 'factsV1', 'limit': 1 }).toString()
    let { data, loading } = useSearch(searchParams, pathname);

    if (loading) {
        return <></>
    }

    console.log(data)

    return (
        <tr>
            <td>
                <table id='ec-summaries'>
                    <tbody>
                        <tr>
                            <th className='table-header' colSpan={2}>
                                Facts 
                            </th>
                        </tr>
                        {data.map((d,i) => <FactsRow d={d} key={i} />)}
                    </tbody>
                </table>
            </td>
        </tr>)
}