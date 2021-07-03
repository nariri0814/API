import { useReducer, useEffect, useCallback } from 'react';

function reducer(state, action) {
    switch(action.type){
        case 'LOADING' : 
            return {
                loading: true,
                data: null,
                error: null
            }
        case 'SUCCESS' :
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case 'ERROR' :
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            throw new Error (`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = [], skip = false) {
    const [ state, dispatch ] = useReducer(reducer, {
        loading: false,
        data: false,
        error: null
    });

    //useCallback함수 생략 가능
    const fetchData = useCallback(async () => {
        dispatch({type: 'LOADING'});
        try {
            const data = await callback();
            dispatch({type: 'SUCCESS', data})
        } catch(e) {
            dispatch({type: 'ERROR', error: e})
        }
    },[]);

    useEffect(() => {
        if(skip) {
            return;
        }
        fetchData();
        // 다음 줄만 밑줄 경고 무시
        // eslint-disable-next-line
    },deps);

    return [state,fetchData];
}

export default useAsync;
