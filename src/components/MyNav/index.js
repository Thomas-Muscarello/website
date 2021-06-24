import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav } from 'react-bootstrap'
//navbar

class MyNav extends React.Component{


    navSlide = ()=>{
        const menu = document.querySelector(".menu");
        const nav = document.querySelector('.nav-links');
    
        menu.addEventListener('click',()=>{
            nav.ul.class = 'nav-active';
        });
    }

    render(){
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src="logo8x8.png">
                </img>
                <Navbar.Brand> Thomas Muscarello </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div class="logo">
                
                    <h4>Thomas Muscarello</h4>
                </div>
               
            </div> 
        ) 
    }
}
        
export default MyNav