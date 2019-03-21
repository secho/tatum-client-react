import React, {useContext} from 'react';
import { Context } from '../../store';




const DataAdder = (props) => {

    const {store, dispatch} = useContext(Context);

    return (
        <div>
            <button onClick={() => dispatch({type: "add", value: 99})}>{store.data.length}</button>
        </div>
    )
}

export default DataAdder;