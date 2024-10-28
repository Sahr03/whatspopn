
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Bottombar from '@/components/shared/Bottombar'

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
       <Topbar />
       <LeftSidebar />

       <section className="flex flex-1 h-full">
          <Outlet />
       </section>


       <Bottombar/>
    </div>
  );
};

export default RootLayout

/*
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Bottombar from '@/components/shared/Bottombar'

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      
      <div className="flex flex-1">
        <LeftSidebar />
        
        <section className="flex-1">
          <Outlet />
        </section>
      </div>
      
      <Bottombar />
    </div>
  )
}

export default RootLayout
*/
