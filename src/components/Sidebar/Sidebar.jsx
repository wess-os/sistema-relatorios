import React from 'react';
import './Sidebar.css';
import { SidebarData } from '../../data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='logo'>
            <img src="" alt="logo" />
            <span>
                Relat<span>ó</span>rios
            </span>
        </div>

        <div className='menu'>
            {SidebarData.map((item, index) => {
                return (
                    <div className='menuItem'>
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className='menuItem'>
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar