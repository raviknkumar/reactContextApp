import React, {createContext} from "react";

export const ThemeContext = createContext();

// create a component and that maintains and shares the context
// associates value to contextType associated by context in child components
class ThemeContextProvider extends React.Component{

    state = {
        isLightTheme: true,
        // theme objects
        light:{
            syntax: '#555', // textColor
            ui: '#ddd', // background of element
            bg: '#eee' // background of class
        } ,
        dark : {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        }
        // provide data to required components
    };

    // Add This Function in value of provider to make it accessible for children
    toggleTheme = () =>{
        this.setState({isLightTheme: !this.state.isLightTheme});
    }

    // Value is the object that we want to pass globally, here we are interested
    // to pass all the data about selectedTheme and colors used in it.
    // So We pass entire state


      // ThemeContext Provider wraps the Navbar and BookList,
      // So, they are the children of our ContextProvider and we have to include them
      // inside our provider.
      // To get access of the children, use props.children
     // Don;t give braces for the function toggleTheme() like this in value, just mention the name

    render() {
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;

