import {useState, useEffect, useReducer} from 'react';
import axios, {AxiosRequestConfig} from 'axios';

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
            data: action.payload,
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

export const useDataApi = (initialRequest, initialData) => {
    const [request, setRequest] = useState(initialRequest);
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });
    useEffect(() => {
        request.header = {
            
        }
        console.log(request.method);
        let didCancel = false;
        const fetchData = async () => {
            dispatch({type: 'FETCH_INIT'});
            try {
                const result = await axios(request);
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
    }, [request]);

    const doFetch = request => {
        setRequest(request);
    }

    return { ...state, doFetch };
}