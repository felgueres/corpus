import useSearch from "./useSearch";
import { groupBy } from "../utils/utils";

const formatter = new Intl.NumberFormat('en-US', {currency: 'USD', maximumFractionDigits:0})

const FactsRow = ({ k, v }) => {
    let first = v[0]
    return (<>
        <tr>
            <td className="link-button">{k}</td>
            <td>{first.company_name}</td>
            {v.map((e,i) => <td key={i}>{e.val===0?'-':formatter.format(e.val)}</td>)}
        </tr>
    </>)
}

export const Facts = () => {
    let pathname = '/facts'
    let searchParams = new URLSearchParams({ 'collection': 'factsV1', 'limit': 9000 }).toString()
    let { data, loading } = useSearch(searchParams, pathname);

    if (loading) {
        return <></>
    }

    var gData = Object.entries(groupBy(data, 'symbol'))
    let [,firstFrames] = gData[0]
    let framesList = firstFrames.map(e=>e.frame).sort()
    const FramesHeaders = () => {return framesList.map(e=><th key={e}>{e.slice(2,)}</th>)}
    gData = gData.sort(([, b], [, d])=>d[3].val-b[3].val)

    return (
        <tr>
            <td>
                <table id='facts-table'>
                    <tbody>
                        <tr>
                            <th colSpan={2}>Revenue (MUSD)</th>
                            <FramesHeaders/>
                        </tr>
                        {gData.map(([k, v], i) => <FactsRow k={k} v={v} key={i} />)}
                    </tbody>
                </table>
            </td>
        </tr>)
}