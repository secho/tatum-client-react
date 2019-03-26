import React, {useContext} from 'react';
import { Context } from '../../store/store';




const DataAdder = (props) => {

    const {store, dispatch} = useContext(Context);

    return (
        <div>
            <button onClick={() => dispatch({type: "increment"})}>{store.value}</button>
        </div>
    )
}

export default DataAdder;