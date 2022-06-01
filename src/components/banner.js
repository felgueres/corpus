import image from '../assets/home_logo.svg'
export const Banner = () => {
    return (<table width={'100%'}>
        <tbody>
            <tr id='spacer-h-50'/>
            <tr>
                <td id='banner'>
                    <a href='/' alt='home'><img alt={'nominal'} height={34} width={119} src={image} /></a>
                    <span className="beta-pill">Beta</span>
                </td>
            </tr>
            <tr>
                <td id='slogan'>
                    <span>Summarized Earnings Calls</span>
                </td>
            </tr>
        </tbody>
    </table>)
}