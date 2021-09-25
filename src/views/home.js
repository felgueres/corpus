import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { NavBar } from "../components";


const Home = () => {

const [userEmail, setUserEmail] = useState('');

return (
  <div>
    <NavBar />
    <h1 className="title">
      Integrate climate risk </h1>
    <h1 className="title">into your daily workflow
    </h1>

    <div className="bg-margin-bottom" style={{ 'display': 'flex' }}>
      <Button className="button" href="/profiles">Get started</Button>
    </div>

    <Col xs={12} sm={10} md={8} lg={6} xl={5} className="no-x-padding" >
      <p className="p-bold">
        Receive monthly updates via email
      </p>
      <div className="email-input-layout">
        <form action="https://climatecap.us5.list-manage.com/subscribe/post?u=072ee25a6f9893f25183af5df&amp;id=87eead596f" method="post" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <input className="email-input" type="email" value={userEmail} onChange={event => { setUserEmail(event.target.value) }} name="EMAIL"  id="mce-EMAIL" autoComplete="off" placeholder="you@email.com" required />
            <input className="email-button" type="submit" value="Sign up" name="subscribe" />
        </form>
      </div>
    </Col>
  </div>
)
};

export default Home;
