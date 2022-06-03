const Info = ({ t, p }) => {
    return (
        <td className="border">
            <h3>{t}</h3>
            <span>{p}</span>
        </td>
    )
}

let t1='Skip the long transcripts'
let p1='Nominal summarizes market data, including earnings calls and financial facts, into takeaways points.'

let t2='Why Market Intelligence?'
let p2='Our mission is to increase your ability to find and create new products.' 

let t3='Get market narratives early and factually right '
let p3='We make it easy for teams to pick up on market trends and shifts.' 

export const ValueProp = () => {
    return (
        <>
            <tr>
                <td>
                    <table id='valueprop-table'>
                        <tbody>
                            <tr>{<Info t={t2} p={p2}/>}</tr>
                            <tr>{<Info t={t3} p={p3}/>}</tr>
                            <tr>{<Info t={t1} p={p1}/>}</tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}