const Info = ({ t, p }) => {
    return (
        <td>
            <h3>{t}</h3>
            <span>{p}</span>
        </td>
    )
}

let t1='Skip the long transcripts'
let p1='Nominal summarizes market data, including earnings calls and financial facts, into takeaways points.'

let t2='A user interface that gets out of your way'
let p2='We\'ve put together only what\'s neccesary to increase breadth of analysis and a fast experience.' 

let t3='Get narratives right'
let p3='Nominal makes it easy for teams to pick up on market trends and shifts.' 


 
export const ValueProp = () => {
    return (
        <>
            <tr>
                <td>
                    <table id='valueprop-table'>
                        <tbody>
                            <tr>{<Info t={t1} p={p1}/>}</tr>
                            <tr>{<Info t={t2} p={p2}/>}</tr>
                            <tr>{<Info t={t3} p={p3}/>}</tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}