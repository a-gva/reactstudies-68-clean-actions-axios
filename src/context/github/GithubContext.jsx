import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// Create Context
const GithubContext = createContext()

// Provider Function
export const GithubProvider = ({ children }) => {

    // Users initial state
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    return (
        <GithubContext.Provider
            value={{
                ...state,
                dispatch,
            }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext