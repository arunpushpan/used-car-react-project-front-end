import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar className='fixed-top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://img.freepik.com/free-vector/red-sports-car-black-background-vector_53876-67367.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{borderRadius:'50%'}}
            />{' '} +91 9876543210
<p>
             <h1> BRONZE <span class="text-info">Cars</span></h1>
</p>            </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header