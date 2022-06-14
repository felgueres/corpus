import { Brand } from "./brand"
import { Subscribe } from "./subscribe"
import SearchBar from "./searchbar"

export const Navbar = () => {
    return (
        <tr>
            <table id='navbar'>
                <tbody>
                    <Brand />
                    <SearchBar />
                    <Subscribe />
                </tbody>
            </table>
        </tr>)
}