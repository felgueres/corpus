import { Banner } from "./banner"
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
                                <Subscribe/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>)
}