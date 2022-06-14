import { Brand } from "./brand"
import { Subscribe } from "./subscribe"
import SearchBar from "./searchbar"

export const Navbar = () => {
    return (
        <tr>
            <td>
                <table id='navbar'>
                    <tbody>
                        <tr>
                            <Brand />
                            <SearchBar />
                            <Subscribe />
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    )
}