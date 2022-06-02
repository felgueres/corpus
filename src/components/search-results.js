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
                                        <span className="keyword-pill">Summary</span>
                                        <span className="keyword-pill">{h.section}</span>
                                        <span className="keyword-pill">{h.role}</span>
                                        <br />
                                        <br />
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


    return (<>
        <tr>
            <td>
                <table id='results-table'>
                    <tbody>
                        <tr id='spacer-h-20' />
                        <tr>
                            <td>
                                {!loading && data.length > 0 && <HitItem h={data[0]} />}
                                {(loading || data.length < 1) && <span>Nothin' here</span>}
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
