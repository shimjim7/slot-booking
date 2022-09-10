import React, {useState} from 'react'
import "./style.css"
import Fooddata from './FoodData'


const Search = () => {

  const[fdata, setFdata]= useState(Fooddata);
  console.log(fdata);
  return (
    <div>Search</div>
  )
}

export default Search