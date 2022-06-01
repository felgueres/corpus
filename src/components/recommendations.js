import { useNavigate, createSearchParams } from "react-router-dom"


const useNavigateSearch = () => {
    const navigate = useNavigate()
    return (pathname, params) => navigate({
        pathname: pathname,
        search: `?${createSearchParams(params)}`
    })
}

let s1= {'q': 'supply chains', 'collection': 'summaryV2', 'limit': 2}
let s2= {'q': 'reshoring', 'collection': 'summaryV2', 'limit': 2}
let s3= {'q': 'demand', 'collection': 'summaryV2', 'limit': 2}

export const Recommendations = () => {

    const navigateSearch = useNavigateSearch()

    return (<table id='recommendations'>
        <tbody>
            <tr>
                <td>
                    <span>Suggestions:</span>
                </td>
                <td>
                    <button onClick={()=>navigateSearch('/search', s1)}>supply chains</button>
                </td>
                <td>
                    <button onClick={()=>navigateSearch('/search', s2)}>reshoring</button>
                </td>
                <td>
                    <button onClick={()=>navigateSearch('/search', s3)}>demand</button>
                </td>
            </tr>
        </tbody>
    </table>
    )
}