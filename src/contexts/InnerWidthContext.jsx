import { createContext, useContext, useEffect, useState } from "react";

const contextWidth = createContext(window.innerWidth);

function InnerWidthProvider({children}) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize  () {
        setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return function() {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
    <contextWidth.Provider value={{
      width
    }}>
      {children}
    </contextWidth.Provider>
  )

}
function useWidth(){
    const context = useContext(contextWidth);
    if(context === undefined){
      throw new Error(" contextWidth was used outside the CitiesProvider");
    }
    return context;
}

export {InnerWidthProvider, useWidth};
