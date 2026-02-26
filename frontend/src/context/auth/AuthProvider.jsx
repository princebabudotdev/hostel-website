import AuthContext from "./AuthContext";



const AuthProvider = ({ children }) => {


    const value = {

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider