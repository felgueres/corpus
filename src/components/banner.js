import image from '../assets/home_logo.svg';
export const Banner = () => {
    return (
        <>
            <tr>
                <td id='banner'>
                    <a href='/' alt='home'><img id='logo' alt={'nominal'} src={image} /></a>
                    <span className="beta-pill">Beta</span>
                </td>
            </tr>
            <tr>
                <td id='slogan'>
                    <span>Search market intelligence using Nominal</span>
                </td>
            </tr>
        </>
    )
}