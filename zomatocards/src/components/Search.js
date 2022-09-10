import React, { useState } from 'react'
import "./style.css"
import Fooddata from './FoodData'


const Search = () => {

  const [fdata, setFdata] = useState(Fooddata);
  //console.log(fdata);
  const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
      </div>
    </>
  )
}

export default Search