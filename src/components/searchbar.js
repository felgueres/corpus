import React from "react";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    let query = searchParams.get("q")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.currentTarget)
        let formData = new FormData(event.currentTarget);
        console.log(formData.values())
        let newQuery = formData.get("query");
        if (!newQuery) return;
        setSearchParams({ 'q': newQuery })
    }

    return (
        <table id='searchform-table'>
            <tbody>
                <tr>
                    <td>
                        <form id='search-form' onSubmit={handleSubmit}>
                            <label>
                                <input defaultValue={query ?? undefined} type="text" name="query" autoComplete="false" placeholder="Search companies, people or keywords" />
                            </label>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default SearchBar;