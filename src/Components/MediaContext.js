import { createContext } from "react";

export let MediaContext = createContext([]);

function MediaProvider({ props }) {
  return <MediaContext.Provider value="">
    {props.children}
    </MediaContext.Provider>;
}