import useSearch from "./useSearch";

const SummaryRow = ({ d }) => {
    return (<>
        <tr>
            <td className="symbol">
                {d.symbol}
            </td>
            <td className="truncate">
                {d.s}
            </td>
        </tr>
    </>)
}

export const EarningsList = () => {
    let pathname = '/earnings'
    let searchParams = new URLSearchParams({ 'collection': 'summaryV2' }).toString()
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
                            <th className='table-header' colSpan={2}>
                                Latest Earnings
                            </th>
                        </tr>
                        {data.map((d,i) => <SummaryRow d={d} key={i} />)}
                        <tr>
                            <td colSpan={2} className="showmore">
                                <button>Show all summaries »</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>)
}