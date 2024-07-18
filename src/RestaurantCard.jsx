import React from 'react'


function RestaurantCard({res}) {
    console.log(res)
    
    return (
        <>
            <div className='ResCard'>
                <img className="ResImage" alt='resName' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ res.info.cloudinaryImageId}/> 
                <div className='ResContent'>
                <h3>{res.info.name}</h3>
                <h3>{res.info.costForTwo}</h3>
                <h3>{res.info.avgRating}</h3>
                <h3>{res.info.areaName}</h3>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard
