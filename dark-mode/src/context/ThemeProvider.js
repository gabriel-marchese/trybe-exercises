import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme( theme === "dark" ? "light" : "dark"); 
    }

    return (
        <ThemeContext.Provider value={{color: theme, toggleTheme}}>
            <div className= {`app ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}