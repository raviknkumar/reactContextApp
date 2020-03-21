import React, { Component } from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

// Context can also be used with ContextTheme.Consumer way
// This Consumer way works in both class based components and functional Components as well.
// It can be used to consume multiple Contexts also
class BookList extends Component {

    render() {

        // return Of Render

        // Declare ThemeContext.Consumer{ (context) -> {
        // functionCode
        // return (jsxTemplate);
        //   }
        // }
        return (

            <AuthContext.Consumer>{ (authContext) =>{
                return(
                    <ThemeContext.Consumer>{ (themeContext) =>{

                        const {isLightTheme, light, dark} = themeContext;
                        const theme = isLightTheme ? light : dark;

                        const {isAuthenticated, toggleAuthenticated} = authContext;

                        return (
                            <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
                                <ul>
                                    <li style={{background: theme.ui}}>the way of kings</li>
                                    <li style={{background: theme.ui}}>the name of the wind</li>
                                    <li style={{background: theme.ui}}>the final empire</li>
                                </ul>

                                <button onClick={toggleAuthenticated}>Toggle Authenticated</button>
                            </div>
                        );
                    }
                    }</ThemeContext.Consumer>
                );
            }}</AuthContext.Consumer>


        );
    }
}

export default BookList;
