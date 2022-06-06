import { useSearchParams } from "react-router-dom";
import SkeletonHit from "../skeletons/SkeletonHit";
import { usePathname } from "../utils/utils";
import useSearch from "./useSearch";

const HitItem = ({ h, q }) => {
    let kwords = h.kwords.slice(0,2).map(x=>x.split(' ').length>1?x.split(' ').join('-'):x)
    console.log(kwords)
    return (
        <tr>
            <td>
                {h.name}
            </td>
            <td>
                {h.role}
            </td>
            <td>
                {h.label}
            </td>
            <td>
                {kwords.map(x=><span>{x} </span>)}
            </td>
        </tr>
    )
}

export const SectionsTable = () => {
    let [searchParams,] = useSearchParams();
    let pathname = usePathname();
    let { data, loading } = useSearch(searchParams, pathname);

    if (loading) {
        return <>
            <SkeletonHit />
        </>
    }

    let firstE = data[0];

    return (<>
        <tr>
            <td>
                <span className="profile-title">{firstE.company_name} <br /> Earnings Call: {firstE.period}</span>
            </td>
        </tr>
        <tr>
            <td>
                <table id='ec-sections-table'>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <th>role</th>
                            <th>sentiment</th>
                            <th>keywords</th>
                        </tr>
                        {Object
                            .entries(data)
                            .sort(e => e.start_idx)
                            .map(([k, v],) => <HitItem key={k} h={v} q={searchParams.get('q')} />)}
                    </tbody>
                </table>
            </td>
        </tr>
    </>
    )
};
