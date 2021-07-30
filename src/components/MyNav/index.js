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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <nav>
                <div class="logo">
                    <h4>Thomas Muscarello</h4>
                </div>
               
               <Link to='/'> Home </Link>
               <Link to='/'> About </Link>
               <Link to='/'> Projects </Link>
               <Link to='/'> Contact </Link>
               <Link to='/'> Blog </Link>
               <div class='menu'>
                   <div class='line1'></div>
                   <div class='line2'></div>
                   <div class='line3'></div>
               </div>
           </nav>
            </div> 
        ) 
    }
}
        
export default MyNav