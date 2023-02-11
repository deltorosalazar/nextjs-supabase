import { createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const {children} = props

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}