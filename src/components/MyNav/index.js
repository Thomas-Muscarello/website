import React from 'react'
import {Link} from 'react-router-dom'
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
             <nav>
                <div class="logo">
                    <h4>Thomas Muscarello</h4>
                </div>
            <ul class="nav-links">
                <li>
                   <a><Link to='/'> Home </Link></a>
                </li>
               <li>
                    <a><Link to='/about'> About </Link></a>
               </li>
               <li>
                    <a><Link to='/projects'> Projects </Link></a>
               </li>
               <li>
                    <a><Link to='/contact'> Contact </Link></a>
               </li>
               <li>
                    <a><Link to='/blog'> Blog </Link></a>
               </li>
            </ul>
              
               <div class='menu'>
                   <div class='line1'></div>
                   <div class='line2'></div>
                   <div class='line3'></div>
               </div>
              
           </nav>
        ) 
    }
}
        
export default MyNav