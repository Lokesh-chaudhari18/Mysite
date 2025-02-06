import React, { useState } from "react";
import '../CSS/Contact.css'
import { Button, Col, Container,Form,Row } from "react-bootstrap";
import axios from "axios";


function Contact(){

  const [cname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [problem, setProblem] = useState("")


    async function handleSubmit(c) {
      c.preventDefault() 
      const Cdata = {
          cname: cname,
          email: email,
          mobile: mobile,
          problem: problem
      }

      try {
        const responce = await axios.post('http://localhost:8001/contactinfo', Cdata);
            console.log(responce.data.data);
            alert('Data Add Successfully!');
        }
        catch(err) {
            console.log(err);
        }
        setName("")
        setEmail("")
        setMobile("")
        setProblem("")
        }
    return(
        <>

        <Container>
            <Row>
            <h2 id="contact-design">Contact</h2>
            <p id="para-centre-design">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Row>

            {/* ------------------Contact form------------------------ */}


            

    <Row>
        <Col>
    <center>
    <Form  className="Contact-formmm" onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="Name"
         placeholder="Enter Name"
         value={cname}
         required
         onChange={(c) => setName(c.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
         placeholder="Enter email"
         value={email}
         required
         onChange={(c) => setEmail(c.target.value)} 
         />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Mobile No</Form.Label>
        <Form.Control type="number" 
        value={mobile}
        required
        onChange={(c) => setMobile(c.target.value)} 
         />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Describe your problem</Form.Label>
        <Form.Control as="textarea"  
        value={problem}
        required
        onChange={(c) => setProblem(c.target.value)} 
        />
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
    </Col>
    </Row>
 



            

        </Container>
        </>
    );
}

export default Contact;