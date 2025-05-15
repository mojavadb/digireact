import { useEffect } from "react";

function useCounterTime(time, functionShouldDo){
    useEffect(function(){
            const automataChanging = setInterval(()=>{
                functionShouldDo();
            }, time);
            return function(){
                clearInterval(automataChanging);
            }
        }, [time, functionShouldDo]);

    return (null);
}

export default useCounterTime
