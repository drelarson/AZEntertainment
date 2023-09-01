import React, { useState } from 'react';
import searchIcon from '../Imgs/search.png';
import cancelIcon from '../Imgs/csncel.png';

const SearchBar = ({ eventList, yoloList, setYoloList, setMatchesList, matchesList, setMatches, matches }) => {
    const [search, setSearch] = useState('')
    const [noMatches, setNoMatches] = useState(false)
    
    const handleSearch = (e) => {
        e.preventDefault()
        let bothLists = eventList.concat(yoloList)
  
        let filterTest = eventList.filter((item) =>
            item.category.toLowerCase().includes(search.toLowerCase()) ||
            item.eventName.includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase()) ||
            item.eventStartDate.toLowerCase().includes(search.toLowerCase()) ||
            item.address.city.toLowerCase().includes(search.toLowerCase())
        )

        let filterYolo = yoloList.filter((item) =>
            item.description.toLowerCase().includes(search.toLowerCase()) ||
            item.address.city.toLowerCase().includes(search.toLowerCase()) ||
            item.activityName.toLowerCase().includes(search.toLowerCase()) ||
            item.operationHours.toLowerCase().includes(search.toLowerCase()) ||
            item.operationDays.toLowerCase().includes(search.toLowerCase())
        )

        if (filterTest.length > 0 || filterYolo.length > 0) {
            setNoMatches(false)
            setSearch("")
            setMatches(true)
        }else{
            setNoMatches(true)
        }
        if(filterTest.length > 0){
            setMatchesList(filterTest)
        }else if(filterYolo.length >0){
            setMatchesList(filterYolo)
        }
        //else{
        //     setMatchesList(eventList)
        // }
        // if (filterYolo.length > 0) {
        //     setMatchesList(filterYolo)
        // }

    }
    // const handleReset = (e) => {

    //     e.preventDefault()
    //     setMatches(false)

 
       
    // }


    console.log(yoloList, "yoloList")
    console.log(matchesList, "matcheslist")


    return (
        <>
            <div className="header-search">
                <form className="search-form search-widget" id="top-nav-search-form">
                    <label id="top-nav-search-label" htmlFor='top-nav-search-input' className="visually-hidden">Search</label>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        aria-autocomplete="list"
                        aria-controls="top-nav-search-menu"
                        aria-expanded=''
                        aria-labelledby="top-nav-search-label"
                        autoComplete="off"
                        role='combobox'
                        type='search'
                        id="top-nav-search-input"
                        className="has-search-results search-input-field"
                        placeholder="   "
                        required
                    />

                    <button type='button' className='button action has-icon clear-search-button'>
                        <span className="buttonWrap">
                            <span className="icon icon-search">
                                <img className="icon icon-search" src={cancelIcon} />
                            </span>
                        </span>
                    </button>

                    <button type="submit" onClick={handleSearch} className="button action has-icon search-button">
                        <span className="buttonWrap">
                            <span
                                className="icon icon-search">
                                <img className="icon icon-search" src={searchIcon} />
                            </span>
                            <span className="visually-hidden"
                            >
                                Search
                            </span>
                        </span>
                    </button>
                    <div id="top-nav-search-menu" role='listbox' aria-labelledby="top-nav-search-label" >
                    </div>
                </form>
            </div>

            {noMatches && (
                <div id="noMatches">
                    <p>No Matches Found</p>
                    <p>Try a different search or reset list</p>
                </div>
            )}
        </>
    )
}
export default SearchBar
