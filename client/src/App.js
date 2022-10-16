import "./App.css";



import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";



import React from 'react';

// Components
import ThemeProvider from "./utils/ThemeContext";
import ThemeButton from "./components/ThemeButton/index";
import Landing from "./pages/landing";
import Events from "./pages/events";
import NavScrollExample from "./components/navbar";
import About from "./pages/about";
import Signup from "./pages/signup";
import FooterBottom from "./layouts/footer";

import AuthService from "./utils/Auth";
import ParentLogIn from "./components/forms/parentLogin";

function App() {
<<<<<<< HEAD
=======

>>>>>>> eaa59e6d7a83a62f3d995c837ec68b7c3322c8ac
  const eCards = [
    {
      title: "Title1",
      date: "date1",
      time: "time1",
      text: "text1",
    },
    {
      title: "Title2",
      date: "date2",
      time: "time2",
      text: "text2",
    },
  ];

  const fCard = {
    title: "Title1",
    date: "date1",
    time: "time1",
    text: "text1",
  };



  const auth = (nextState, replace, next) => {
    const isLoggedIn = AuthService.isLoggedIn();
    if (!isLoggedIn) {
      replace({
        pathname:"/login",
        state: {nextPathname: nextState.location.pathname}
      })
    }
  }
  

  return (

>>>>>>> eaa59e6d7a83a62f3d995c837ec68b7c3322c8ac

  return (
    // <UserForm />
    // <FeatureCard title="Online event" date="11/5/22" time="6:00 MDT" text="This event will be taking place on November 5th, online for ease of access. I am very excited to say that I'll be attending in full power!" />
    // <NavScrollExample />
    <ThemeProvider>
      <Router>
        <NavScrollExample />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} onEnter={auth}/>
          <Route
            exact
            path="/events"
            element={<Events eventCards={eCards} featuredCard={fCard} />}
          />
<<<<<<< HEAD
          <Route exact path="/signup" element={<Signup />} />
=======
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path="/login" element={<ParentLogIn />} />
          
>>>>>>> eaa59e6d7a83a62f3d995c837ec68b7c3322c8ac
        </Routes>
        {/* <NavScrollExample /> */}
        <FooterBottom />
      </Router>


    </ThemeProvider>
  );
}
export default App;
