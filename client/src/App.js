import logo from './logo.svg';
import './App.css';

import { Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';




// Components
import ThemeProvider from './utils/ThemeContext';
import ThemeButton from './components/ThemeButton/index';
import UserForm from './components/userForm';
import BasicCard from './components/cards/cards';
import FeatureCard from './components/cards/featureCard';
import NavScrollExample from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
      // <ThemeProvider>
      //   <ThemeButton />
      // </ThemeProvider>

      // <UserForm />
      // <FeatureCard title="Online event" date="11/5/22" time="6:00 MDT" text="This event will be taking place on November 5th, online for ease of access. I am very excited to say that I'll be attending in full power!" />
      // <NavScrollExample />

      <BrowserRouter>
      <NavScrollExample />
      <Routes>
        <Route exact path="/" element={<BasicCard />} />
        <Route exact path="/about" element={<UserForm />} />
        <Route exact path="/events" element={ <FeatureCard title="Online event" date="11/5/22" time="6:00 MDT" text="This event will be taking place on November 5th, online for ease of access. I am very excited to say that I'll be attending in full power!" />} />
      </Routes>
      </BrowserRouter>


  );
}

export default App;
