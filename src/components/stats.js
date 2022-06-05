import { useSearchParams } from "react-router-dom";
import { usePathname } from "../utils/utils";
import useSearch from "./useSearch";

function useModifiedURL(){
    let [searchParams,] = useSearchParams();
    searchParams.set('limit',0)
    return searchParams
}

export const Stats = () => {
    let searchParams = useModifiedURL();
    let pathname = usePathname();
    let { data, loading } = useSearch(searchParams, pathname);

    if (loading) {
        return <></>
    }
    if (data.length === 0) {
        return <></>
    }

    let numCompanies = data.length;

    return (<>
        <tr id='spacer-h-10' />
        <tr><td>Results: {numCompanies}</td></tr>
    </>
    )
};
