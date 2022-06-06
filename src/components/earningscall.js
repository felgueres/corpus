import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import { usePathname } from "../utils/utils";
import useSearch from "./useSearch";

const reactStringReplace = require('react-string-replace')

const HitItem = ({ h, q }) => {

    let r = '(' + q.split(' ').join('|') + ')'

    return (
        <table id='results-table'>
            <tbody>
                <tr>
                    <td>
                        {h.name}, {h.role}, {h.start_idx}, {h.label}
                    </td>
                </tr>
                <tr>
                    <td>
                        {reactStringReplace(h.s, new RegExp(r, "gmi"), (match, i) => (<b key={i}>{match}</b>))}
                    </td>
                </tr>
                <tr>
                    <td onClick={handleClick}>
                        <span> Show Original<br /></span>
                        <span className="summary not-visible">{h.original}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


const handleClick = event => {
    event.currentTarget.querySelector('.summary').classList.toggle('not-visible')
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
            <td>
                {Object
                    .entries(data)
                    .sort(e => e.start_idx)
                    .map(([k, v], ) => <HitItem key={k} h={v} q={searchParams.get('q')} />)}
            </td>
        </tr>
    </>
    )
};
