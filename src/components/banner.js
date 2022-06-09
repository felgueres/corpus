export const Banner = () => {
    return (
        <>
            <table id='brand'>
                <tbody>
                    <tr>
                        <td id='banner'>
                            <a href='/' alt='home'>
                                <span>
                                    <span className='title'>tinyTranscripts</span><span className="beta-pill">Beta</span>
                                </span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td id='slogan'>
                            <span>Summarized Earnings Transcripts</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}