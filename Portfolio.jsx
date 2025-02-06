import React from "react";
import '../CSS/Portfolio.css'
import {Row,Col,Tabs,Tab, Container} from 'react-bootstrap'
import tea from '../assets/All/Tea.jpg'
import plant from '../assets/All/plant.jpg'
import bottle from '../assets/All/bottle.jpg'
import  stool from  '../assets/All/stool.jpg'
import  Lamp from '../assets/All/lamp.jpg'
import  unknown from '../assets/All/unknown.jpg'
import lens from '../assets/All/lens.jpg'
import chasma from '../assets/All/chasma.jpg'
import watch from '../assets/All/watch.jpg'
function Portfolio(){
    return(
        <> 
        <Container>
        <Row>
            <h2 id="portfolio-design">PORTFOLIO</h2>
            <p id="para-centre-design">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <Tabs
                defaultActiveKey="All"
                transition={false}
                id="noanim-tab-example"
                className="mb-3">
                <Tab eventKey="All" title="All"  >
                  <Row id="Row-designp">
                    <Col>
                    <img src={bottle} id="bottle-size"/>
                    
                    
                    </Col>
                    <Col><img src={tea} id="tea-size"  /></Col>
                    <Col><img src={plant}   id="plant-size"  /></Col>
                  </Row>
                  <Row id="Row2-design">
                    <Col>
                    <img src={stool} id="stool-size"/>
                    </Col>
                    <Col> 
                    <img src={Lamp} id="lamp-size"/>
                    
                    </Col>
                    <Col>
                    <img src={chasma} id="chasma-size"/>
                    
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={lens} id="lens-size"/>
                    
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col>
                    <img src={watch} id="watch-size"  />
                    </Col>
                    <Col>
                    <img src={unknown}  id="unknown-size"/>
                    </Col>
                  </Row>
                  
                </Tab>
                <Tab eventKey="App" title="App">
                <Row id="Row-designp">
                <Col><img src={tea} id="tea-size"  /></Col>
                    <Col>
                    <img src={bottle} id="bottle-size"/>
                    
                    
                    </Col>
                   
                    <Col><img src={plant}   id="plant-size"  /></Col>
                  </Row>
                  <Row id="Row2-design">
                  <Col> 
                    <img src={Lamp} id="lamp-size"/>
                    
                    </Col>
                    <Col>
                    <img src={stool} id="stool-size"/>
                    </Col>
                    
                    <Col>
                    <img src={chasma} id="chasma-size"/>
                    
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={lens} id="lens-size"/>
                    
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <img src={watch} id="watch-size"  />
                    </Col>
                    <Col>
                   
                    </Col>
                    <Col>
                    <img src={unknown}  id="unknown-size"/>
                    </Col>
                  </Row>
                    
                    
                </Tab>
                <Tab eventKey="Card" title="Card" >
                <Row id="Row-designp">
                    <Col>
                    <img src={bottle} id="bottle-size"/>
                    
                    
                    </Col>
                    <Col><img src={tea} id="tea-size"  /></Col>
                    <Col><img src={plant}   id="plant-size"  /></Col>
                  </Row>
                  <Row id="Row2-design">
                    <Col>
                    <img src={stool} id="stool-size"/>
                    </Col>
                    <Col> 
                    <img src={Lamp} id="lamp-size"/>
                    
                    </Col>
                    <Col>
                    <img src={chasma} id="chasma-size"/>
                    
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={lens} id="lens-size"/>
                    
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col>
                    <img src={watch} id="watch-size"  />
                    </Col>
                    <Col>
                    <img src={unknown}  id="unknown-size"/>
                    </Col>
                  </Row>
               
                </Tab>
                <Tab eventKey="Web" title="Web" >
                <Row id="Row-designp">
                <Col><img src={tea} id="tea-size"  /></Col>
                    <Col>
                    <img src={bottle} id="bottle-size"/>
                    
                    
                    </Col>
                   
                    <Col><img src={plant}   id="plant-size"  /></Col>
                  </Row>
                  <Row id="Row2-design">
                  <Col> 
                    <img src={Lamp} id="lamp-size"/>
                    
                    </Col>
                    <Col>
                    <img src={stool} id="stool-size"/>
                    </Col>
                    
                    <Col>
                    <img src={chasma} id="chasma-size"/>
                    
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={lens} id="lens-size"/>
                    
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <img src={watch} id="watch-size"  />
                    </Col>
                    <Col>
                   
                    </Col>
                    <Col>
                    <img src={unknown}  id="unknown-size"/>
                    </Col>
                  </Row>
                </Tab>
                </Tabs>

        </Row>
        </Container>
        
        </>
    )
}

export default Portfolio;