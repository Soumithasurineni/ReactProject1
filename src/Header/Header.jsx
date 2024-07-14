import React from 'react'
import './Header.css'

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
                <li>Home</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
        </>
    )
}
const ResCard=()=>{
    return(
        <>
            <div className='ResCard'>
                <img className="ResImage" src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" alt='resName'/> 
                <h3>Kritunga</h3>
                <h3>900</h3>
                <h3>4.5</h3>
            </div>
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
            <h1>Search</h1>
            <div className='resContainer'>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>

            </div>
        </>
    )
}

export default Header
