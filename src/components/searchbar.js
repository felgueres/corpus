import React from "react";
import { useSearchParams, useNavigate, createSearchParams } from "react-router-dom";

export const SearchBar = () => {
    let [searchParams, ] = useSearchParams();
    let navigate = useNavigate()
    let query = searchParams.get("q")

    async function handleSubmit(event){
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let newQuery = formData.get("query");
        if (!newQuery) return;
        navigate({
            pathname: "/search",
            search: `?${createSearchParams({'q':newQuery, 'collection': 'summaryV2', 'limit': 2})}`
        })
    }

    return (
        <table id='searchform-table'>
            <tbody>
                <tr>
                    <td>
                        <form id='search-form' onSubmit={handleSubmit}>
                            <label>
                                <input defaultValue={query ?? undefined} type="text" name="query" autoComplete="off" placeholder="Search companies, people or keywords" />
                            </label>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default SearchBar;