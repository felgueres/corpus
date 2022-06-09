import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import { usePathname } from "../utils/utils";
import useSearch from "./useSearch";

const SummaryParagraph = ({ data }) => {
    return (<>
        <tr>
            <th>Summary</th>
        </tr>
        {data.sort(e => e.start_idx).map((e,i) => <tr key={i}><td /><td>{e.s}</td></tr>)}</>)
}

const Keywords = ({ data }) => {
    return (<>
        <tr>
            <th>Keywords</th>
        </tr>
        <tr>
            <td />
            <td>
                {data.map(e => e.kwords.slice(0, 3).map((e,i) => <span key={i}>{e}</span>))}
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
                        <tr>
                            <td>Speakers</td>
                        </tr>

                        <Keywords data={data} />

                        <SummaryParagraph data={data} />

                    </tbody>
                </table>
            </td>
        </tr>
    </>
    )
};
