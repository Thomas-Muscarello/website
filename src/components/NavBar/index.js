import React from 'react'
import {Link} from 'react-router-dom'
//navbar

class Navbar extends React.Component{


    navSlide = ()=>{
        const menu = document.querySelector(".menu");
        const nav = document.querySelector('.nav-links');
    
        menu.addEventListener('click',()=>{
            nav.ul.class = 'nav-active';
        });
    }

    render(){
        return(
            <nav>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <img src="logo8x8.png">
                </img>
                <div class="logo">
                
                    <h4>Thomas Muscarello</h4>
                </div>
                <ul class="nav-link">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/blog">Blog</Link>
                </ul>
                <div class='menu'>
                    <div class="line1"> </div>
                    <div onClick={this.navSlide}></div>
                    <div class="line3"> </div>
                </div>
            </nav> 
        ) 
    }
}
        
export default Navbar