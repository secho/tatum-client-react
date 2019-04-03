import React, { useContext, Fragment, useState } from 'react';
import { Context } from '../../store/store';
import { useDataApi } from '../../hooks/useDataApi';
import TextField from '@material-ui/core/TextField';

const NewTatumCustomer = (props) => {

    const [customer, setCustomer] = useState();

    const { data, isLoading, isError, doFetch } = useDataApi();

 
    const handleSubmit = (event) => {
        console.log(customer);
        doFetch({
            url: 'https://sandbox.tatum.io/api/v1/customer',
            method: 'POST',
            data: {
                customerCountry: "US",
                externalId: customer,
            }
            
        });
        event.preventDefault();
    }

    return (
        <Fragment>
            <form onSubmit={event => handleSubmit(event)}>
                
                    <TextField type="number" name="externalId"
                        label="external ID"
                        onChange={event => setCustomer(event.target.value)}/>
                
                <input type="submit" value="Submit"/>
            </form>
        </Fragment>
    )
}

export default NewTatumCustomer;