const sMap = { 'positive': '#7cd2af', 'negative': '#d4789d', 'neutral': '#A9A9A9' }

function Hit(k, v) {
    let qualitative = v.filter(i => i.s_type === 'Qualitative')
    let quantitative = v.filter(i => i.s_type === 'Quantitative')

    function hitItem(h) {
        return (
            <li>
                <table>
                    <tbody>
                        <tr>
                            <td id='metadata'>
                                <table>
                                    <tbody>
                                        <tr>{h.name}</tr>
                                        <tr>{h.role}</tr>
                                        <tr>{h.period}</tr>
                                        <tr>Sentiment <svg height={11} width={12}><circle cx={5} cy={7} r={3} fill={sMap[h.label]}></circle></svg></tr>
                                        <tr>{h.is_summary ? 'Summary' : 'Transcript'}</tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{ 'verticalAlign': 'middle' }}>{h.s}</td>
                        </tr>
                    </tbody>
                </table>
            </li>
        )
    }

    return (
        <table id='hits-table'>
            <tbody>
                <tr><td><span id="hit-title"> {k} </span></td></tr>
                {quantitative.length > 0 &&
                    <tr>
                        <td id='subsection-a'>
                            <header>Quantitative</header>
                            {quantitative.map(h => hitItem(h))}
                        </td>
                    </tr>}
                {qualitative.length > 0 && <tr>
                    <td id='subsection-b'>
                        <header>Qualitative</header>
                        {qualitative.map(h => hitItem(h))}
                    </td>
                </tr>}
                <tr id='spacer-h' />
            </tbody>
        </table >
    );
}

export default Hit;