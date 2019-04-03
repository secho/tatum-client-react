import React, { useContext, Fragment, useState } from 'react';
import { Context } from '../../store/store';
import { useDataApi } from '../../hooks/useDataApi';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid, Fab } from '@material-ui/core';
import { CardActions, Dialog } from 'material-ui';
import NewTatumCustomer from '../NewTatumCustomer'

const TatumCustomers = (props) => {

    const { services: { accountService } } = useContext(Context);
    const [dialogOpened, setDialogOpened] = useState(false);

    const { data, isLoading, isError, doFetch, customerService } = useDataApi({
        url: 'https://sandbox.tatum.io/api/v1/customer',
        method: 'GET',
    },
        { clients: [] },
    );

    return (
        <Fragment>
            {/* {console.log(accountService.getAccounts().bind()}
            {console.log(accountService.getAccountAddresses())} */}
            {/* <h2>Customers of {userState.user.user.name}</h2> */}
            <h2>Customers</h2>
            {/* <h3>Count: {data.clients.length}</h3> */}

            <Button variant="contained" color="primary" onClick={event =>
                customerService('getCustomers')}>
                Reload
            </Button>

            <Fab

                variant="extended"
                size="medium"
                color="secondary"
                aria-label="Add"
                onClick={() => {
                    setDialogOpened(true)
                }}
            // onClick={event =>
            //     doFetch({
            //         url: 'https://sandbox.tatum.io/api/v1/customer',
            //         method: 'GET',
            //     })}
            >
                +
             </Fab>


            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div><p>Loading...</p></div>
            ) : (
                    <Grid container spacing={16}>
                        {console.log(data.clients)}
                        {data.clients.map(
                            item => (
                                <Grid item key={item.id} xm={6}>
                                    <Card key={item.id}>
                                        <CardContent>
                                            Internal Id: {item.id}
                                            <br />
                                            External Id: {item.externalId}
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Detail</Button>
                                            <Button size="small" color='secondary'>Delete</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        )}
                    </Grid>
                )}

            <Grid container spacing={16}>
                {accountService.getAccounts().map(
                    item => (
                        <Grid item key={item.publicId}>
                            <p>{item.currency}</p>
                            <p>{item.publicId}</p>
                        </Grid>
                    )
                )}
            </Grid>

            <Dialog open={dialogOpened} onClose={() => setDialogOpened(false)}>
                <NewTatumCustomer />
                <Button onClick={() => setDialogOpened(false)} color="primary">
                    Cancel
            </Button>
                <Button color="primary">
                    Create
            </Button>
            </Dialog>
        </Fragment>
    )
}

// TatumCustomers.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default TatumCustomers;