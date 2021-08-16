import React from "react";
import { Button, Container } from "react-bootstrap";

import { Content, Hero } from "../components";

const Home = () => (
  <Container>
    <h1 className="pt-4" style={{ 'font-size': '40px', width: '60%', textAlign: 'center', marginLeft: '20%', marginRight: '20%', marginTop: '5%' }}>
      Climate-related intelligence for a low carbon economy.
      <br></br>
    <hr className="mt-3" style={{width: '70%'}}/>
    </h1>
    <p className="pt-1" style={{textAlign:'center', width: '60%', marginLeft: '20%', marginRight: '20%', 'font-size': '16px'}}>ClimateCap provides tools and data on the climate risks and opportunities faced by organizations worldwide</p>

    <div className="text-center pt-3">
      <Button className="button">Join Discord</Button>
      <Button className="button">Get Newsletter</Button>
    </div>
  </Container>
);

export default Home;
