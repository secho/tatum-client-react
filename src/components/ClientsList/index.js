import React, {useContext} from 'react';
import { Context } from '../../store';


const ClientsList = (props) => {

    const {store} = useContext(Context);
    
    return (
        <div>
            {store.data.map((value, i) => 
                <div key={i}>{value}</div>
            )}
        </div>
    )
}

export default ClientsList;