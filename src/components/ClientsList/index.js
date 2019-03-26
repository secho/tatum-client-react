import React, {useContext, useState, Fragment} from 'react';
import { Context } from '../../store';


const ClientsList = (props) => {

    const [query, setQuery] = useState('redux');
    const {store, service} = useContext(Context);
    
    return (
        <div>
            {store.data.map((value, i) => 
                <div key={i}>{value}</div>
            )}

        <Fragment>
                <form onSubmit={event => {
                service.doFetch(
                    {url: `http://hn.algolia.com/api/v1/search?query=${query}`}
                );
                event.preventDefault();
                }}>
                <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {service.isError && <div>Something went wrong ...</div>}

            {service.isLoading ? (
                <div>Loading...</div>
            ): (
                <ul>
                {service.data.hits.map(item => (
                    <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                    </li>
                ))}
                </ul>
            )}

            
            </Fragment>
        </div>
    )
}

export default ClientsList;