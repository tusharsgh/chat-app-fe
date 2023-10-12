import React,{useState} from 'react'
import { Sidebarheader } from './header'
import {Notifications} from './notifications';
import {Search} from './search';

function SideBar() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
        {/* SideBar header */}
   <Sidebarheader/>
   {/*Notifications*/}
   <Notifications/>
   <Search
   searchLength={searchResults.length}
   setSearchResults={setSearchResults}
   />
    </div>
  )
}

export default SideBar
