import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const useAction = (actionCreator: any) => {
    const dispatch = useDispatch();

    return React.useMemo(() => {
        return bindActionCreators(actionCreator, dispatch);
    }, [dispatch, actionCreator]);
};
