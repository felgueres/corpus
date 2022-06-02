import React from "react";

const TdElement = ({ e }) => {
  return (<td>{e}</td>)
}

const Footer = () => {
  return (
    <tr>
      <td>
        <table id="footer-table">
          <tbody>
            <tr>
              <TdElement e={<span>Nominal Technologies</span>}/>
            </tr>
          </tbody>
        </table >
      </td>
    </tr>
  );
};

export default Footer;
