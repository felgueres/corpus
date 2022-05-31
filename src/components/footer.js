import React from "react";

const LinkRow = ({name}) => {
  return (<tr>
    <td>
      <a href='/' className="links">{name}</a>
    </td>
  </tr>)
}

const Footer = () => {
  return (
    <table id="footer-table">
      <tbody>
        <tr>
          <td>
            <span className="title">Contact us</span>
          </td>
        </tr>
        <LinkRow name='Join Membership' />
        <LinkRow name='About' />
      </tbody>
    </table>
  );
};

export default Footer;
