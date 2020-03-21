import React from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

class Navbar extends React.Component{

    static contextType = ThemeContext; // contextType is used to get the themeContext and associate the
    // value provided by the ContextProvider to a variable context refer in this class
    // using this.context
    // varibleName of this staticVariable has to be contextType to associate context into this class

    render() {
        return(

            <AuthContext.Consumer>{ (authContext) =>{

                console.log(this.context);
                const {isLightTheme, light, dark} = this.context;
                const theme = isLightTheme ? light : dark;

                // get AuthContext
                const { isAuthenticated, toggleAuthenticated } = authContext;
                return(
                    <nav style={{background: theme.ui, color: theme.syntax}}>
                        <h1> Book List </h1>
                        <h4>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h4>
                        <ul>
                            <li>Home</li>
                            <li>Contact Us</li>
                            <li>About</li>
                        </ul>
                    </nav>
                );
            }}</AuthContext.Consumer>
        );
    }
}

export default Navbar;