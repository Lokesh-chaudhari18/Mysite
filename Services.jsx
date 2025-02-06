import React from "react";
import '../CSS/Services.css'
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import logo1 from '../assets/activity.svg'
import logo2 from '../assets/bounding-box-circles.svg'
import logo3 from '../assets/calendar4-week.svg'
import logo4 from '../assets/broadcast.svg'




function Services(){
    return(
        <>
            <Container id="container-design">
                <Row id="row-design">
                    <h2 id="Service-design">SERVICES</h2>
                    <p id="para-centre-design">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> <br/>
                    <div className="div-design">
                        <Col id="col1-designnn"> 
                        <Card style={{ width: '18rem' }}>
                        <Card.Img  id="logo-design"variant="top" src={logo1} />
                       
                        <Card.Body id="card-body-design">
                            <Card.Title id="card-design">Lorem Ipsum</Card.Title>
                            <Card.Text>                   
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi         
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>
                    <Row>
                    <Col id="col1-designnn">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img  id="logo-design" variant="top" src={logo2} />
                       
                        <Card.Body id="card-body-design">
                        <Card.Title  id="card-design">Sed ut perspici</Card.Title>
                        <Card.Text>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                         </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col id="col1-designnn">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img id="logo-design"  variant="top" src={logo3} />
                        
                        <Card.Body id="card-body-design">
                        <Card.Title  id="card-design">Magni Dolores</Card.Title>
                        <Card.Text>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           
                            </Card.Text>
                          
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col id="col1-designnn">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img  id="logo-design" variant="top" src={logo4} />
                        
                        <Card.Body id="card-body-design">
                       
                        <Card.Title  id="card-design">Nemo Enim</Card.Title>
                        <Card.Text >
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis

                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                    </Col>
                    </Row>
                    </div>
                </Row>
            </Container>
            
            </>
    );
}

export default Services; 