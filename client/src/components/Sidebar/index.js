import React from 'react';
import { useTheme } from '../../utils/ThemeContext';
import SidebarButton from './SidebarButton';
import SidebarCar from './SidebarCard';


export default function Sidebar() {
  
  const { isMobile } = useTheme();

  return (
    <>
      {isMobile
        ? <div className='row d-flex justify-contents-center '>
            <SidebarButton />
          </div>
        : <div></div>
      }
    </>
  );

}
