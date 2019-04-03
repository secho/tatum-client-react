import React from 'react'
import { Route } from 'react-router-dom'
import Layout from '../Layout';

const PrivateRoute = ({component: Component, title, ...rest}) => {

    return (
        <Layout title={title}>
            <Route
                {...rest}
                render={props => {
                    return <Component {...props}/>
                }}
            />
        </Layout>
    )
}

export default PrivateRoute