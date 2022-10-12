import React from 'react';
import Accordion from './Accordion/index';
import Column from './Column/index';
import ThemeProvider, { useTheme } from '../../utils/ThemeContext';

export default function Sidebar() {
  
  const { isMobile} = useTheme();

  return (
    <>
      {isMobile
        ? <h1>Accordion</h1>
        : <h1>Column</h1>
      }
    </>
  );

}

// <Accordion />
// <MobileProvider> */}
// {mobile */}
// <Accordion /> */}
// <Column /> */}
// </MobileProvider> */}