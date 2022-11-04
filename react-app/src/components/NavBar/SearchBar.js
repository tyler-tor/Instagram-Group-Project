import React,{useEffect, useState} from "react";
import { useSelector, useDispatch,  } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import {getAllUsers} from '../../store/users'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const users = Object.values(useSelector(state => state.users))
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getAllUsers()).then(() =>{
      console.log(users);
    })
  },[dispatch])

  const updateSearch = (e) =>{
    setSearchInput(e.target.value)
  }
  const handleNavClick = (e) =>{
    setSearchInput('')
  }

  //TODO when user clicks search, redirect to new page with a list of users that match search.
  return (
    <>
    <div className='search-bar-container'>

        <div className="search-portion-input-area">

          <input
              type='text'
              value={searchInput}
              onChange={updateSearch}
          />
            <button>Search</button>
        </div>

        <div className='drop-down-users'>
          {users &&
            users.filter(user => {
              const searchTerm = searchInput.toLowerCase();
              const name = user.username.toLowerCase();


              return(
                searchTerm
                &&
                name.startsWith(searchTerm)
                &&
                name !== searchTerm
              )

            })
            .slice(0,10)
            .map((item) =>{
              return(
                <NavLink key={item.id} to={`/${item.id}`} onClick = {handleNavClick}>
                  {item.username}
                </NavLink>
              )
            })
          }

        </div>

    </div>

    </>
  );
};

export default SearchBar;
