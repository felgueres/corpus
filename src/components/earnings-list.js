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

    console.log(data)

    if (loading) {
        return <></>
    }

    return (
        <tr>
            <td>
                <table id='ec-summaries'>
                    <tbody>
                        <tr>
                            <td className="title">
                               Symbol 
                            </td>
                            <td className="right showmore">
                                Show all summaries »
                            </td>
                        </tr>
                        {data.map(d => <SummaryRow d={d} />)}
                    </tbody>
                </table>
            </td>
        </tr>)
}