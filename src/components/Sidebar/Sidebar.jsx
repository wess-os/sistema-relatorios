import React, { useState } from 'react';
import { SidebarData } from '../../data/Data';
import { UilSignOutAlt, UilChart } from "@iconscout/react-unicons";
import './Sidebar.css';

function Sidebar() {

    const [selected, setSelected] = useState(0);

    return (
        <div className='Sidebar'>
            <div className='logo'>
                <UilChart/>
                <span>
                    Relatórios
                </span>
            </div>

            <div className='menu'>
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected===index?'menuItem active' : 'menuItem'} 
                        key={index}
                        onClick={()=>setSelected(index)}
                        >
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