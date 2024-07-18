import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantComponent() {
  const [data, setData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const TopRated = () => {
    const result = filteredRes.filter((res) => res.info.avgRating >= 4);
    setFilteredRes(result);
  };
  const AllRest = () => setFilteredRes(data);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try{
        const data2 = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const responseData = await data2.json();
          setData(responseData?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
          setFilteredRes(responseData?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    catch(error){
        console.log(error)
    }
    
  };
  return (
    <>
      <div>
        <input
          className="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const searchRes = data.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(searchRes);
          }}
        >
          search
        </button>
      </div>
      <div className="topRated">
        <h3>TOP RATED RESTAURANT</h3>
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => (e.target.checked ? TopRated() : AllRest())}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div className="resContainer">
        {filteredRes.map((res, index) => (
          <RestaurantCard key={index} res={res} />
        ))}
      </div>
    </>
  );
}

export default RestaurantComponent;
