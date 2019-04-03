import { useState, useEffect, useReducer } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

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
        data: { clients: action.payload },
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

  if (request) {
    request.headers = {
      'X-client-secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkIjoxNTQ1MTYzMjYwMDAwLCJhcGlLZXkiOiJhc2tqbG5mcTIzaW5mcTIzZjg5cHFmbnE5OG5nIn0.TscRGH5FScYvMiRx86Vl0JgWpCqIsKQoKaKSA09lU_0',
    }
  }

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    if (request) {
      console.log(request.method);
    }
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios(request);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
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

  const customerService = (action, data) => {
    switch (action) {
      case 'getCustomers': {
        setRequest(
          {
            url: 'https://sandbox.tatum.io/api/v1/customer',
            method: 'GET',
          }
        )
      }

    }
  }

  return { ...state, doFetch, customerService };
}