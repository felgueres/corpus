import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import { usePathname } from "../utils/utils";
import useSearch from "./useSearch";

const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

const SummaryParagraph = ({ data }) => {
    return (<>
        <tr className="left-align border-bottom">
            <th>Summarized Transcript</th>
        </tr>
        {data.sort(e => e.start_idx).map((e, i) => <tr id={e.index} key={i}>
            <td className="transcript-spacing">{e.s}</td></tr>
        )
        }
    </>)
}

const IndexRow = ({ d }) => {
    return (
        <tr className="hover-highlight">
            <td className="truncate-text"><a href={`#${d.index}`}>{d.role}</a></td>
            <td id='index-list'>
                {d.kwords.slice(0, 3).map((e, i) => <span key={i}>{e}</span>)}
            </td>
            <td><svg height={11} width={12}><circle cx={5} cy={7} r={3} fill={sMap[d.label]}></circle></svg></td>
        </tr>
    )
}

const Index = ({ data }) => {
    return (<>
        <tr>
            <td>
                <table id='index-table'>
                    <tbody>
                        <tr className="left-align border-bottom">
                            <th>Role</th>
                            <th>Keywords</th>
                            <th>Sentiment</th>
                        </tr>
                        {data.map((d,i) => <IndexRow key={i} d={d} />)}
                    </tbody>
                </table>
            </td>
        </tr>
    </>
    )
}

const SummaryStats = ({ data }) => {
    let s_tokens = data.map(e => e.summary_tokens).reduce((partialSum, a) => partialSum + a, 0)
    let o_tokens = data.map(e => e.original_tokens).reduce((partialSum, a) => partialSum + a, 0)
    let perc = s_tokens / o_tokens

    return (<>
        <tr className="left-align border-bottom">
            <th >Stats</th>
        </tr>
        <tr>
            <td className='transcript-spacing'>
                <span>This summary has {Math.floor((1 - perc) * 100)}% less text than the original transcript. </span>
                <br></br>
            </td>
        </tr>
    </>
    )
}

export const EarningsCall = () => {
    let [searchParams,] = useSearchParams();
    let pathname = usePathname();
    let { data, loading } = useSearch(searchParams, pathname);

    if (loading) {
        return <>
            <SkeletonHit />
        </>
    }

    return (<>
        <tr>
            <td><span className="profile-title">{data[0].company_name} ({data[0].symbol})<br />FY 2022Q1</span></td>
        </tr>
        <tr>
            <td>
                <table id='transcript-table'>
                    <tbody>
                        <Index data={data} />
                        <SummaryParagraph data={data} />
                        <SummaryStats data={data} />
                    </tbody>
                </table>
            </td>
        </tr>
    </>
    )
};
