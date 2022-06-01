import React from "react";

const LinkRow = ({ name }) => {
  return (<tr>
    <td>
      <a href='/' className="links">{name}</a>
    </td>
  </tr>)
}

const TitleRow = ({ name }) => {
  return (<tr>
    <td>
      <span className="title">{name}</span>
    </td>
  </tr>)
}

const Table = ({ rows }) => {
  return (<table>
    <tbody>
      {rows}
    </tbody>
  </table>)
}

const TdElement = ({ e }) => {
  return (<td>{e}</td>)
}

const Footer = () => {
  return (
    <table id="footer-table">
      <tbody>
        <tr>
          <TdElement e={<Table rows={[<TitleRow key='a' name={'Company'} />,
          <LinkRow key='b' name='Join Membership' />,
          <LinkRow key='c' name='About' />]} />} />
          <TdElement e={<Table rows={[<TitleRow key='a' name={'Resources'} />,
          <LinkRow key='b' name='Product Roadmap' />,
          <LinkRow key='c' name='Join our Slack Channel' />]} />} />
        </tr>
      </tbody>
    </table >
  );
};

export default Footer;
