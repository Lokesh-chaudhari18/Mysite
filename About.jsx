import React from "react";
import {Container ,Row ,Col,Button,Accordion,ProgressBar } from "react-bootstrap";
import '../CSS/Abour.css'
import pic from '../assets/why-us.png'
import peoplepic from '../assets/skills.png'
function About() {
    return (
        <>
        <Container >
                <Row id="temp">
                <h2 id="about-design"> 
                ABOUT US
                </h2></Row>
            <Row id="RowP-design">
                <Col> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab saepe sint necessitatibus quam commodi beatae, </p> <br></br>
                <ul> <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo</li>
                </ul>
                </Col>
                <Col id="Col2-Design"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias expedita excepturi eius suscipit officiis porro reiciendis, ut distinctio voluptate architecto alias dolores debitis, amet repudiandae cumque odio quam. Expedita, quae.</p>
                    <Button variant="outline-primary">Read more</Button>{' '}
                </Col>
            </Row>
        </Container>
        <Container fluid classname="Accordion-con-design">
            <Row id="Row-desing">
                <Col id="Col3-Desing">
                <h3 className="text-heading">Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header id="head-1"><p id="blue-color-accordion">01 </p> &nbsp;&nbsp;&nbsp;
                    <p>Non consectetur a erat nam at lectus urna duis?</p></Accordion.Header>
                    <Accordion.Body>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </Accordion.Body>
                </Accordion.Item><br/>
                <Accordion.Item eventKey="2">
                    <Accordion.Header id="head-1"><p id="blue-color-accordion">02 </p>&nbsp;&nbsp;&nbsp;
                    <p>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</p></Accordion.Header>
                    <Accordion.Body>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </Accordion.Body>
                </Accordion.Item><br/>
                <Accordion.Item eventKey="3" id="accordion-bpadding">
                    <Accordion.Header id="head-1"><p id="blue-color-accordion">03</p> &nbsp;&nbsp;&nbsp;
                    <p>Dolor sit amet consectetur adipiscing elit pellentesque?</p></Accordion.Header>
                    <Accordion.Body>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
                </Col>
                   
                <Col > 
                        <img id="img1-design" src={pic}/>
                
                </Col>
            </Row>
            
            <Row>
              <Col>
               <img id="img2-desing" src={peoplepic}/>
               </Col>
              <Col id="progressbar-col-design">
              <h2 className="text-heading">Voluptatem dignissimos provident quasi corporis voluptas</h2>
              <p id="paragraph-design">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <span>HTML</span>
              <ProgressBar  now={100} label={`${100}%`} /> <br/>
              <span>CSS</span>
              <ProgressBar now={90} label={`${90}%`} /><br/>
              <span>JAVASCRIPT</span>
              <ProgressBar now={76} label={`${75}%`} /> <br/>
              <span>PHOTOSHOP</span>
              <ProgressBar now={55} label={`${55}%`} /> <br/>

              </Col>
            </Row>
        </Container>

       
        
        </>

    )
}

export default About; 