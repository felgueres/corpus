import { useSearchParams } from "react-router-dom";
import useSearch from "./useSearch";

const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

const HitItem = ({ h }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td id='metadata'>
                        <table>
                            <tbody>
                                <tr><td>{h.company_name}</td></tr>
                                <tr><td>{h.symbol}</td></tr>
                                <tr><td>{h.name}</td></tr>
                                <tr><td>{h.role}</td></tr>
                                <tr><td>{h.period}</td></tr>
                                <tr><td>Sentiment <svg height={11} width={12}><circle cx={5} cy={7} r={3} fill={sMap[h.label]}></circle></svg></td></tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>{h.s}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td onClick={handleClick}>
                                        <span className=""><br />Read Original<br /></span>
                                        <span className="summary not-visible">{h.original}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


const handleClick = event => {
    event.currentTarget.querySelector('.summary').classList.toggle('not-visible')
}

export const SearchResults = () => {
    let [searchParams,] = useSearchParams();
    let { data, loading } = useSearch(searchParams)

    if(loading){
        return <>
        <tr><td>Loading first skeleton</td></tr>
        <tr><td>Loading second skeleton</td></tr>
        </>
    }


    return (<>
        <tr>
            <td>
                <table id='results-table'>
                    <tbody>
                        <tr id='spacer-h-20' />
                        <tr>
                            <td>
                                {Object.entries(data).map(([k,v],)=> <HitItem key={k} h={v} />)}
                                {data.length ===0 &&<span>Your search did not match any documents. <br/> <br/> Try different or fewer keywords.</span>}
                            </td>
                        </tr>
                        <tr id='spacer-h-20' />
                    </tbody>
                </table>

            </td>
        </tr>
    </>
    )
};
