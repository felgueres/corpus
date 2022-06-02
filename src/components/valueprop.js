const InfoSquare = ({ t, p }) => {
    return (
        <td>
            <h3>{t}</h3>
            <span>{p}</span>
        </td>
    )
}

export const ValueProp = () => {
    return (
        <>
            <tr>
                <td>
                    <table id='valueprop'>
                        <tbody>
                            <tr id='spacer-h-50' />
                            <tr>
                                {<InfoSquare t='Key ideas in less time.' p='Get takeaways from earnings calls, not tens of transcript pages.' />}
                                {<InfoSquare t='All signal, no noise.' p='Learn from CEOs, not journos.' />}
                                {<InfoSquare t='Fast search.' p='Transform the way you learn about an industry.' />}
                            </tr>
                            <tr id='spacer-h-50' />
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}