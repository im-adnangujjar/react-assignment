import React from 'react'
import {Container,Navbar,Nav,} from 'react-bootstrap'
import './NavbarSecationStyle.css'


export default function NavberSection() {
  return (
<div>
{/* <Navbar collapseOnSelect expand="lg" bg="white" >
  <Container>
  <Navbar.Brand href="NORDIC ROSE"><h1>NORDIC ROSE</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <div>
    <Nav>
      <Nav.Link href="#BLOG"><h2>BLOG</h2></Nav.Link>
      <Nav.Link href="#ABOUT"><h2>ABOUT</h2> </Nav.Link>
      <Nav.Link href="#LINK"><h2>LINK</h2> </Nav.Link>
      <Nav.Link href="#PROJACT"><h2>PROJECTS</h2> </Nav.Link>
    </Nav>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"><h4>NORDIC ROSE</h4></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#"><h4>BLOG</h4> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"><h4>ABOUT</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"><h4>LINK</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"><h4>PROJECTS</h4></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
<hr></hr>
 


</div>

   )
}