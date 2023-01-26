import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getAllUsers } from "../../store/users";
import { setSearchUsers } from "../../store/search_users";
import "./SearchBar.css";
import { getProfileUser } from "../../store/profileUser";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const users = Object.values(useSelector((state) => state.users));
  const [searchEmpty, setSearchEmpty] = useState(true);
  const [hasInputted, setHasInputted] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllUsers()).then(() => {
      // console.log(users);
    });
  }, [dispatch]);

  useEffect(() =>{
    if(document.getElementById('search-nav-link')){
      setSearchEmpty(false)
    }
    else{
      setSearchEmpty(true)
    }
  },[searchInput])


  const updateSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const handleNavClick = (e) => {
    setSearchInput("");
  };

  const handleSearch = (e) => {
    //!functionality to save the searched users in a state. We could use this later to create a search result page,
    //! but honestly i think the drop down search is ok.
    const res = users.filter((user) => {
      const input = searchInput.toLowerCase();
      const name = user.username.toLowerCase();
      if (name.startsWith(input)) {
        return true;
      }
    });
    // console.log(res);
    dispatch(setSearchUsers(res));
    // history.push('/search')
  };

  //TODO when user clicks search, redirect to new page with a list of users that match search.
  return (
    <>
      <div className="search-container">
        <div className="search-inner">
          {/* <button onClick={handleSearch}>Search</button> */}

          <input
            type="text"
            value={searchInput}
            onChange={updateSearch}
            placeholder="Search for a user"
          />
        </div>

        <div className="dropdown">
          {users &&
            users
              .filter((user) => {
                const searchTerm = searchInput.toLowerCase();
                const name = user.username.toLowerCase();
                return (
                  searchTerm &&
                  name.startsWith(searchTerm)
                );
              })
              .slice(0, 10)
              .map((item) => {
                return (
                  <NavLink
                    key={item.id}
                    to={`/${item.id}`}
                    onClick={() => {
                      dispatch(getProfileUser(item.id))
                      setSearchInput('')
                    }}
                    className={"dropdown-row"}
                    id='search-nav-link'
                  >
                    <img src={item.profilePicture} className="search-pic" />
                    <div className="search-dropdown-name">{item.username}</div>
                  </NavLink>
                );
              })}
              {
                searchEmpty && searchInput &&
                  <div> No users with that username found! </div>
              }
        </div>
      </div>
    </>
  );
};

export default SearchBar;
