import { useState } from "react";
import { createStore } from "reusable";

export const useDarkMode = createStore( () => {
  // tslint:disable-next-line: react-hooks-nesting
  const [ useDarkMode, setUseDarkMode ] = useState(sessionStorage.getItem("useDarkMode"));
  // tslint:disable-next-line: no-shadowed-variable
  const handleSetDarkMode = async (useDarkMode: any) => {
    sessionStorage.setItem("useDarkMode", useDarkMode);
    return setUseDarkMode(useDarkMode);
  };
  return [useDarkMode, handleSetDarkMode];
});
