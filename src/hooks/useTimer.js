import { useEffect } from "react";

function useTimer(setTime) {
    useEffect(() => {  
            const x = setInterval(() => {  
              setTime(prevTime => prevTime - 1);  
            }, 1000);  
          
            return () => {  
              clearInterval(x);  
            };  
        }, [setTime]);
    return (null)
}

export default useTimer
