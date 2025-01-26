import { createContext, useState } from "react";



export let SearchContext =  createContext('');

export function SearchContextProvider({children}) {
    const [SearchContent, setSearchContent] = useState()
  return (
    <SearchContext.Provider value={{SearchContent, setSearchContent}}>
      {children}
    </SearchContext.Provider>
  )
}