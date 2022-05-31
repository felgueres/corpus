import image from '../assets/home_logo.svg'
export const Banner = () => {
    return (<table width={'100%'}>
        <tbody>
            <tr id='spacer-h-50'/>
            <tr>
                <td id='banner'>
                    <img alt={'nominal'} height={34} width={119} src={image} />
                    <span className="beta-pill">Beta</span>
                </td>
            </tr>
            <tr>
                <td id='slogan'>
                    <span>Executive Knowledge Graph</span>
                </td>
            </tr>
        </tbody>
    </table>)
}