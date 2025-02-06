import React from "react";
import '../CSS/Team.css'
import { Container,Row,Col } from "react-bootstrap";
import white from '../assets/white.jpg'
import jonhson from '../assets/jonhson.jpg'
import twitter from '../assets/twitter-x.svg'
import facebook from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import linkdin from '../assets/linkedin.svg'
import anderson from '../assets/anderson.jpg'
import amanda from '../assets/amanda.jpg'




function Team() {
    return(
        <>
        <Container id="container-design">
            <Row>
            <h2 id="Team-design">Team</h2>
            <p id="para-centre-design">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Row>
            <Row id="row-design">
                <Col id="col1-design" className="mx-3">
                <div>
                    <img id="white-picture" src={white}/> 
                </div>
                <div id="name-white">
                    <h3 id="heading-text"><strong>Walter White</strong></h3>  
                    <span>Chief Executive Officer</span>
                    <p id="para2-design">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                    <ul id="list-design">
                        <li>
                            <img src={twitter}/>
                        </li>
                        <li>
                        <img src={facebook}/>

                        </li>
                        <li>
                        <img src={insta}/>

                        </li>
                        <li>
                        <img src={linkdin}/>

                        </li>
                    </ul>

                
                </div>
                </Col>
                <br/>
               
                <Col id="col1-design" className="mx-3">
                <div>
                    <img id="white-picture" src={jonhson}/> 
                </div>
                <div id="name-white">
                    <h3 id="heading-text"><strong>Sarah Jhonson</strong></h3>  
                    <span>Product Manager</span>
                    <p id="para2-design">Aut maiores voluptates amet et quis praesentium qui send</p>
                    <ul id="list-design">
                        <li>
                            <img src={twitter}/>
                        </li>
                        <li>
                        <img src={facebook}/>

                        </li>
                        <li>
                        <img src={insta}/>

                        </li>
                        <li>
                        <img src={linkdin}/>

                        </li>
                    </ul>

                
                </div>
                </Col>
                {/*  */}
            </Row>

            <Row id="row-design">
            <Col id="col1-design" className="mx-3">
                <div>
                    <img id="white-picture" src={anderson}/> 
                </div>
                <div id="name-white">
                    <h3 id="heading-text"><strong>William Anderson</strong></h3>  
                    <span>CTO</span>
                    <p id="para2-design">Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                    <ul id="list-design">
                        <li>
                            <img src={twitter}/>
                        </li>
                        <li>
                        <img src={facebook}/>

                        </li>
                        <li>
                        <img src={insta}/>

                        </li>
                        <li>
                        <img src={linkdin}/>

                        </li>
                    </ul>

                
                </div>
                </Col>


                <Col id="col1-design" className="mx-3">
                <div>
                    <img id="white-picture" src={amanda}/> 
                </div>
                <div id="name-white">
                    <h3 id="heading-text"><strong>Amanda Jepson</strong></h3>  
                    <span>Accountant</span>
                    <p id="para2-design">Dolorum tempora officiis odit laborum officiis et et accu</p>
                    <ul id="list-design">
                        <li>
                            <img src={twitter}/>
                        </li>
                        <li>
                        <img src={facebook}/>

                        </li>
                        <li>
                        <img src={insta}/>

                        </li>
                        <li>
                        <img src={linkdin}/>

                        </li>
                    </ul>

                
                </div>
                </Col>
               
            </Row>

        </Container>
        
        </>
    );
}


export default Team;
