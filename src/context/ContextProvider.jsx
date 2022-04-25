import React, { useState, createContext } from "react";

export const Context = createContext()

export default function ContextProvider({children}) {
  const [language, setLanguage] = useState('EN')

  return (
    <Context.Provider value={{
      language,
      setLanguage
    }}>
      {children}
    </Context.Provider>
  )
}