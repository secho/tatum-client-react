import {useState, useEffect, useReducer} from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
          return {
            ...state,
            isLoading: true,
            isError: false
          };
        case 'FETCH_SUCCESS':
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: {clients: action.payload },
          };
        case 'FETCH_FAILURE':
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
        default:
          throw new Error();
      }
}

export const useDataApi = (initialUrl, initialData) => {

    const config =  { 
      headers: {
        'X-client-secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkIjoxNTQ1MTYzMjYwMDAwLCJhcGlLZXkiOiJhc2tqbG5mcTIzaW5mcTIzZjg5cHFmbnE5OG5nIn0.TscRGH5FScYvMiRx86Vl0JgWpCqIsKQoKaKSA09lU_0',
      }
    }

    const [url, setUrl] = useState(initialUrl);
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });
    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispatch({type: 'FETCH_INIT'});
            try {
                const result = await axios.get(url,config);
                if (!didCancel) {
                    dispatch({type: 'FETCH_SUCCESS', payload: result.data})
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({type: 'FETCH_FAILURE'});
                }
            }
        };
        fetchData();

        return () => {
            didCancel = true;
        };
    }, [url]);

    const doFetch = url => {
        setUrl(url);
    }

    return { ...state, doFetch };
}