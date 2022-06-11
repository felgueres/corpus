import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import { usePathname } from "../utils/utils";
import useSearch from "./useSearch";

const SummaryParagraph = ({ data }) => {
    return (<>
        <tr className="transcript-title-row">
            <th>Summarized Transcript</th>
        </tr>
        {data.sort(e => e.start_idx).map((e, i) => <><tr key={i}>
            <td>{e.s}</td>
        </tr>
        <tr>
            <td/>
            {/* <td>
                {e.original}
            </td> */}
        </tr>
        </>
        )
        }</>)
}

const Keywords = ({ data }) => {
    return (<>
        <tr className="transcript-title-row">
            <th>Keywords</th>
        </tr>
        <tr>
            <td>
                {data.map(e => e.kwords.map((e, i) => <span key={i}>{e}, </span>))}
            </td>
        </tr>
    </>
    )
}

const SummaryStats= ({ data }) => {
    let s_tokens = data.map(e => e.summary_tokens).reduce((partialSum,a)=>partialSum+a,0)
    let o_tokens = data.map(e => e.original_tokens).reduce((partialSum,a)=>partialSum+a,0)
    let perc = s_tokens/o_tokens

    return (<>
        <tr className="transcript-title-row">
            <th>Stats</th>
        </tr>
        <tr>
            <td>
                <span>This summary has {Math.floor((1-perc)*100)}% less text than the original transcript. </span>
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
            <td><h2>{data[0].company_name}</h2></td>
        </tr>
        <tr>
            <td>
                <table id='transcript-table'>
                    <tbody>
                        <SummaryStats data={data}/>
                        <Keywords data={data} />
                        <SummaryParagraph data={data} />
                    </tbody>
                </table>
            </td>
        </tr>
    </>
    )
};
