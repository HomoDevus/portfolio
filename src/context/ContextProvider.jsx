import React, { useState, createContext } from "react";
import { LOCALES } from "../assets/languages/locales";

export const Context = createContext()

export default function ContextProvider({ children }) {
  const [language, setLanguage] = useState(getLanguage())

  function getLanguage() {
    return localStorage.getItem('locale') || LOCALES.ENGLISH
  }

  return (
    <Context.Provider value={{
      language,
      setLanguage
    }}>
      {children}
    </Context.Provider>
  )
}