import logo from "./logo.svg";
import "./App.css";
import ThemeProvider from "./utils/ThemeContext";
import ThemeButton from "./components/ThemeButton/index";
import UserForm from "./components/userForm";
function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>

    // <UserForm />
  );
}

export default App;
