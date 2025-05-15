import { useEffect, useRef } from "react";
const BASE_URL = "http://localhost:8000";

function useFetchDataReducer(dispatch, target="") {
    const isMounted = useRef(true);
    useEffect(function(){
        async function fetchData(){
          dispatch({type: "rejected", payload: ""});
          dispatch({type: "loading"});

          try{
            const res = await fetch(`${BASE_URL}/${target}`);
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
            
            const data = await res.json();
            if(isMounted){
                dispatch({type: `loaded/${target}`, payload: data});
            }

          }catch(err){
            if(isMounted){
                dispatch({type: "rejected", payload: err.message});
            }
          }
        }
        if (!dispatch){
            return;
        }
        fetchData();

        return function(){
            isMounted.current = false;
        }
    }, [dispatch, target]);
}

export default useFetchDataReducer
