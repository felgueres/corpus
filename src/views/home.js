import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { Recommendations } from "../components/recommendations";

const InfoSquare = ({t, p}) => {
    return (
        <td>
            <h3>{t}</h3>
            <span>{p}</span>
        </td>
    )
}

const ValueProp = () => {
    return (
        <table id='valueprop'>
            <tbody>
                <tr id='spacer-h-100'/>
                <tr id='spacer-h-50'/>
                <tr>
                    {<InfoSquare t='Key ideas in less time.' p='Read quantitative and qualitative takeaways from earnings calls, not tens of transcript pages.'/>}
                    {<InfoSquare t='High signal to noise ratio.' p='Search what CEOs are saying for your topic. eg. Elon: If you are into minting money, start a lithium company. Margins are like software.'/>}
                    {<InfoSquare t='For investors and entrepreneurs.' p='Transform the way you learn about securities and new industries.'/>}
                </tr>
                <tr id='spacer-h-100'/>
                <tr id='spacer-h-100'/>
            </tbody>
        </table>
    )
}

export const Home = () => {
    return (
        <div>
            <Banner />
            <SearchBar />
            <Recommendations />
            <ValueProp/>
        </div>
    );
};

export default Home;
