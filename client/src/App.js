import logo from './logo.svg';
import './App.css';
import ThemeProvider from './utils/ThemeContext';
import ThemeButton from './components/ThemeButton/index';
import UserForm from './components/userForm';
import BasicCard from './components/cards/cards';
import FeatureCard from './components/cards/featureCard';
function App() {
  return (
      // <ThemeProvider>
      //   <ThemeButton />
      // </ThemeProvider>

      // <UserForm />
      <FeatureCard title="Online event" date="11/5/22" time="6:00 MDT" text="This event will be taking place on November 5th, online for ease of access. I am very excited to say that I'll be attending in full power!" />
  );
}

export default App;
