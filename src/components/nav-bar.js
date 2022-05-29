import React from "react";
import image from "../assets/am.png"

const NavBar = () => {
  return (
    <table id="homebar">
      <tbody>
        <tr>
          <td>
            <img src={image}/>
            <span className="beta-pill">Beta</span>
          </td>
          <td style={{ 'textAlign': 'right' }}>
            <a href='https://www.surveymonkey.com/r/25G9H5K'>Join Membership</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default NavBar;
