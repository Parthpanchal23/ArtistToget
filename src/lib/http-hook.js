import { useState ,useCallback, useRef,useEffect} from "react";

export const useHttpClient = () => {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
 const activeHttpRequests =useRef([]);
  const sendRequest = useCallback(async (
    url,
    method = "GET",
    body = null,
    headers = {},
  ) => {
    setIsLoading(true);
    const httpAbortControll = new AbortController();
    activeHttpRequests.current.push(httpAbortControll);

    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
        signal:httpAbortControll.signal
      });

      const responseData = await response.json();
      
      activeHttpRequests.current = activeHttpRequests.current.filter(reqCtl =>reqCtl !== httpAbortControll);
      if (!response.ok) {
        throw new Error(responseData?.message);
      }

      setIsLoading(false);
      return responseData;

    } catch (err) {
        setError(err?.message||err);
        setIsLoading(false);
        throw err;
    }
  },[]);

const clearError =()=>{
    setError(null);
}

useEffect(()=>{
    return ()=>{
        activeHttpRequests?.current?.forEach(abortCntrl =>abortCntrl.abort())
    };
},[])
  return {isloading,error,sendRequest,clearError}
};
