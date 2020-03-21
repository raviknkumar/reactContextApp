import React, {createContext} from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component{

    state = {
        isAuthenticated: true,
    };


    toggleAuthenticated = () =>{
        this.setState({isAuthenticated: !this.state.isAuthenticated});
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
            <AuthContext.Provider value={{...this.state, toggleAuthenticated: this.toggleAuthenticated }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;

