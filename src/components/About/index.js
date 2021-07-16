import React from 'react'
import Contact from "../Contact/contact"
import Projects from "../Projects/projects"
import Blog from "../Blog/blog"
//About Page

const About = (props) =>{
    return(
         <div class="about">
             <h2> I have just finished The Flatiron School for Software Engineering. For the past 11 months I have had a hands on experience learning different langues in order to become a full stack engineer.</h2>
             <br/>
             <h2> I am proficient in the following:
                 <h3>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Rails</li>
                    <li>Sinatra</li>
                    <li>Ruby</li>
                 </h3>
             </h2>
            
            <img src="selfie.png"></img>
            <Contact/>
            <Projects/>
            <Blog/>
        </div>
        
        )
    
}

export default About