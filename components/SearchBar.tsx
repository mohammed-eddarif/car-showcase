"use client";

import { useState } from "react";
import {SearchManufacturer} from "./";

const SearchBar = () => {
    const handleSearch = () => {}
    const [manufacturer, setmanufacturer] = useState('');
  return (
    <form className='searchBar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setmanufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar