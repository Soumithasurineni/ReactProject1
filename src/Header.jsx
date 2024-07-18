import React from 'react'
import { Link } from 'react-router-dom'
// import RestaurantComponent from './RestaurantComponent'

const Logo=()=>{
    return (
        <>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbm_q6KNMcT9off_cKMAOoW9rK0hDwLCTfH-GbXj2uLnW-zRGfIMdyMbwUT5ZZzBVP3LY&usqp=CAU" alt='logo'/>
        </>
    )
}
const NavBar=()=>{
    return(
        <>
            <ul className='NavIcons'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>AboutUs</Link></li>
                <li>Cart</li>
            </ul>
        </>
    )
}
function Header() {

    return (
        <>
            <div className='NavBarComponent'>
                <Logo/>
                <NavBar/>
            </div>
            {/* <RestaurantComponent/> */}
           
        </>
    )
}

export default Header
