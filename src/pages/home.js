import React from 'react'
import{Sidebar} from "../components/sidebar"

function Home() {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden ">
{/*container*/}
<div className="container flex min-h-screen flex"> 
{/*SideBar*/}
<Sidebar/>
</div>     
    </div>
  );
}

export default Home
