const InfoSquare = ({t, p}) => {
    return (
        <td>
            <h3>{t}</h3>
            <span>{p}</span>
        </td>
    )
}

export const ValueProp = () => {
    return (
        <table id='valueprop'>
            <tbody>
                <tr id='spacer-h-100'/>
                <tr id='spacer-h-50'/>
                <tr>
                    {<InfoSquare t='Key ideas in less time.' p='Get quantitative and qualitative takeaways from earnings calls, not tens of transcript pages.'/>}
                    {<InfoSquare t='High signal to noise ratio.' p='Search what CEOs are saying for your topic.'/>}
                    {<InfoSquare t='For investors and entrepreneurs.' p='Transform the way you learn about securities and new industries.'/>}
                </tr>
                <tr id='spacer-h-100'/>
                <tr id='spacer-h-100'/>
            </tbody>
        </table>
    )
}