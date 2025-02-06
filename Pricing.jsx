import React, { useEffect, useState } from "react";
import '../CSS/Pricing.css'
import { Container ,Col,Row,Card,Button ,Carousel,Accordion} from "react-bootstrap";
import slider1 from '../assets/testimonials-1.jpg'
import slider2 from '../assets/testimonials-2.jpg'
import slider3 from '../assets/testimonials-3.jpg'
import slider4 from '../assets/testimonials-4.jpg'
import axios from "axios";

function Pricing(){
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/getdetails')
      .then(res => {
        setData(res.data.data); 
      })
      .catch(err => {
        
        console.log(err);
      });
  }, []);
    return(
        <>
        <Container>
            <Row>
              
            <h2 id="pricing-design">Pricing</h2>
            <p id="para-centre-design">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Row>
            <Row id="row2-design">
            {data.map((a) => (
            <Col>
            <Card style={{ width: '415px' ,height: '300px'}}>
                <Card.Body>
                    <Card.Title id="card-tittle-design"   >{a.pname}</Card.Title>
                    <Card.Text id="card-text-design">
                    <h4 id="heading4-design">{a.price}$</h4>
                    <h3>Rating:- {a.rating}</h3>
                  {/* <ul id="list-designnnn">
                        <li> Quam adipiscing vitae proin</li>
                        <li> Nec feugiat nisl pretium</li>
                        <li> Nulla at volutpat diam uteera</li>
                        <li id="line-through" >Pharetra massa massa ultricie</li>
                        <li id="line-through">Massa ultricies mi quis hendrerit </li>
                   </ul> */}
                    </Card.Text>
                    <Button id="button-design" variant="outline-info">Buy Now</Button>{' '}
                </Card.Body>
            </Card>
           
  
            
            </Col>
            ))}
            
            </Row>
        </Container>
        <Container fluid id="fluid-design">
            <Row>
            <h2 id="pricing-design">Testimonials</h2>
            <p id="para-centre-design">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Row>
            <Row id="row2-design">
            
            <Carousel data-bs-theme="dark" id="carousel-design" controls={false}>
      <Carousel.Item>
        <img
          className="d-block"
          id="img1-designnnn"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 id="heading3-design">Saul Goodman</h3>
          <span>Ceo & Founder</span><br/>
          <p id="carousel-para-designnnnn">Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. </p>
        </Carousel.Caption>
      </Carousel.Item>


      {/* ----------------------------------- */}
      <Carousel.Item>
        <img
          className="d-block"
          id="img1-designnnn"
          src={slider2}
          alt="second slide"
        />
        <Carousel.Caption>
          <h3 id="heading3-design">Saul Goodman</h3>
          <span>Designer</span><br/>
          <p id="carousel-para-designnnnn">Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>



      {/* -------------------------------------- */}
      <Carousel.Item>
        <img
          className="d-block"
          id="img1-designnnn"
          src={slider3}
          alt="third slide"
        />
        <Carousel.Caption>
          <h3 id="heading3-design">Jena Karlis</h3>
          <span>Store Owner</span><br/>
          <p id="carousel-para-designnnnn">Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. 

</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          id="img1-designnnn"
          src={slider4}
          alt="fourth slide"
        />
        <Carousel.Caption>
          <h3 id="heading3-design">Matt Brandon</h3>
          <span>Freelancer</span><br/>
          <p id="carousel-para-designnnnn">Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. 
</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Row>
        </Container>


        {/* ----------------------------------------------------------------------------------------- */}

        <Container fluid id="Frequently-Asked-Questions-container">
            <Row>
            <h2 id="pricing-design">Frequently Asked Questions</h2>
            <p id="para-centre-design-2">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            </Row>
            <Row id="accordion-row">
            <Accordion id="accordion-design">
      <Accordion.Item eventKey="0">
        <Accordion.Header ><h3 id="header-design">Non consectetur a erat nam at lectus urna duis?</h3></Accordion.Header>
        <Accordion.Body>
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <br/>


      {/* ------------------------------------------------------------------- */}
      <Accordion.Item eventKey="1">
        <Accordion.Header ><h3 id="header-design">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3></Accordion.Header>
        <Accordion.Body>
        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
        </Accordion.Body>
      </Accordion.Item>
      <br/>

      {/* ------------------------------------------------------------------ */}

      <Accordion.Item eventKey="2">
        <Accordion.Header ><h3 id="header-design">Dolor sit amet consectetur adipiscing elit pellentesque?</h3></Accordion.Header>
        <Accordion.Body>
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <br/>


      {/* ------------------------------------------------------------------ */}

      <Accordion.Item eventKey="3">
        <Accordion.Header ><h3 id="header-design">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3></Accordion.Header>
        <Accordion.Body>
        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
        </Accordion.Body>
      </Accordion.Item>
      <br/>


      {/* -------------------------------------------------------------------- */}


      

      <Accordion.Item eventKey="5">
        <Accordion.Header ><h3 id="header-design">Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h3></Accordion.Header>
        <Accordion.Body>
        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
      <br/>

      
    </Accordion>
            </Row>
        </Container>
        </>

    );
}

export default Pricing;