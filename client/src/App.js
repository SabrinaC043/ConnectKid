import "./App.css";


import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ThemeProvider from "./utils/ThemeContext";
import ThemeButton from "./components/ThemeButton/index";
import Landing from "./pages/landing";
import Events from "./pages/events";
import NavScrollExample from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Signup from "./pages/signup";
import FooterBottom from "./layouts/footer";
// import LandingInformation from "./components/landing";
function App() {

  const eCards = [
    {
      title: 'Title1',
      date: 'date1',
      time: 'time1',
      text: 'text1'
    },
    {
      title: 'Title2',
      date: 'date2',
      time: 'time2',
      text: 'text2'
    },
  ];

  const fCard = {
    title: 'Title1',
    date: 'date1',
    time: 'time1',
    text: 'text1'
  };

  return (


    // <UserForm />
    // <FeatureCard title="Online event" date="11/5/22" time="6:00 MDT" text="This event will be taking place on November 5th, online for ease of access. I am very excited to say that I'll be attending in full power!" />
    // <NavScrollExample />
    <ThemeProvider>
      <BrowserRouter>
        <NavScrollExample />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/events"
            element={
              <Events
                eventCards={eCards}
                featuredCard={fCard}
              />
            }
          />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
        {/* <NavScrollExample /> */}
      </BrowserRouter>
      <FooterBottom />
    </ThemeProvider>
  );
}
export default App;
