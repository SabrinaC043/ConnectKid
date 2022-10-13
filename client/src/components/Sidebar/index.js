import React from 'react';
import ThemeProvider, { useTheme } from '../../utils/ThemeContext';
import SidebarButton from './SidebarButton';


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
