import React from "react";

const NavBar = () => {
  return (
    <table id="homebar">
      <tbody>
        <tr>
          <td>
            <a href="/">SpaceTrail</a>
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
