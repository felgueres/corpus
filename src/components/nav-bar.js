import React from "react";

const NavBar = () => {
  return (
    <table id="homebar">
      <tr>
        <td>
          <a href="/">Industrials Search</a>
        </td>
        <td style={{ 'textAlign': 'right' }}>
          <a href='https://www.surveymonkey.com/r/25G9H5K'>Join Membership</a>
        </td>
      </tr>
      <tr id="spacer"/>
    </table>
  );
};

export default NavBar;
