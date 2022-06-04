import { useNavigate, createSearchParams } from "react-router-dom"


const useNavigateSearch = () => {
    const navigate = useNavigate()
    return (pathname, params) => navigate({
        pathname: pathname,
        search: `?${createSearchParams(params)}`
    })
}

let s1 = { 'q': 'supply chains', 'collection': 'summaryV2', 'limit': 5 }
let s2 = { 'q': 'tesla', 'collection': 'summaryV2', 'limit': 5 }
let s3 = { 'q': 'demand', 'collection': 'summaryV2', 'limit': 5 }

export const Recommendations = () => {
    const navigateSearch = useNavigateSearch()
    return (
        <>
            <tr>
                <td>
                    <table id='recommendations'>
                        <tbody>
                            <tr>
                                <td>
                                    <span>Suggestions:</span>
                                </td>
                                <td>
                                    <button onClick={() => navigateSearch('/search', s1)}>{s1.q}</button>
                                </td>
                                <td>
                                    <button onClick={() => navigateSearch('/search', s2)}>{s2.q}</button>
                                </td>
                                <td>
                                    <button onClick={() => navigateSearch('/search', s3)}>{s3.q}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}