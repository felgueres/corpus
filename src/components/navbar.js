import { Banner } from "./banner"
import SearchBar from "./searchbar"
import { Subscribe } from "./subscribe"


export const Navbar= () => {
    return (
        <tr>
            <td>
                <table id='navbar-table'>
                    <tbody>
                        <tr>
                            <td>
                                <Banner />
                            </td>
                            <td>
                                <SearchBar />
                            </td>
                            <td>
                                <Subscribe/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>)
}