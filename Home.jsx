import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import '../CSS/Home.css'
import logo from '../assets/hero-img.png'

function Home() {
    return(
        <Row  id="Container-design">
        <Col><h1 id="heading-design">
        Better Solutions For Your Business
        </h1>
        <p id="para-design">We are team of talented designers making websites with Bootstrap</p>
        <div id="Button-design">
        <Button href="#">Get Started</Button> 
       
        </div>
        </Col>
        <Col id="Col-2-design"> 
         <img src={logo}/>
        </Col>
        
      </Row>
    );
}

export default Home;