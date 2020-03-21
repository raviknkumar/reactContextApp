import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import BookList from "./components/BookList";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <AuthContextProvider>
              <Navbar/>
              <BookList/>
              <ToggleTheme/>
          </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
