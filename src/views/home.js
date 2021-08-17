import React from "react";
import { Button, Container } from "react-bootstrap";

const Home = () => (
  <Container>
    <h1 className="pt-4" style={{ 'font-size': '40px', width: '60%', textAlign: 'center', marginLeft: '20%', marginRight: '20%', marginTop: '5%' }}>
      Data and intelligence for climate finance.
      <br></br>
    <hr className="mt-3" style={{width: '70%'}}/>
    </h1>
    <p className="pt-1" style={{textAlign:'center', width: '60%', marginLeft: '20%', marginRight: '20%', 'font-size': '16px'}}>
      The transition to a lower-carbon economy is estimated to require around $1T USD / year for the foreseeable future. 
      <br></br>
      <br></br>
      ClimateCap builds software to collect data and develop intelligence on climate-related risks and opportunities to support these investments. 
      </p>

    <div className="text-center pt-3">
      <Button className="button" href="https://climatecap.notion.site/ClimateCap-Biweekly-Updates-7e485ad0f2014448ac65fd8775fb5761">Follow our progress</Button>
      <Button className="button" href="https://forms.gle/fVAMX6ASNcyuh5bv7">Provide feedback</Button>
    </div>
  </Container>
);

export default Home;
