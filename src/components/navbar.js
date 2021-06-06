import React from 'react'
import {Link} from 'react-router-dom'
//navbar

class Navbar extends React.Component{
    render(){
        return(
            <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
           
            </div>
        )
    }
}

export default Navbar