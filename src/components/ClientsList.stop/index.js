import React from 'react';
import axios from 'axios';

class ClientsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            customers: []
         }
    }

    config =  { 
        headers: {
          'X-client-secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkIjoxNTQ1MTYzMjYwMDAwLCJhcGlLZXkiOiJhc2tqbG5mcTIzaW5mcTIzZjg5cHFmbnE5OG5nIn0.TscRGH5FScYvMiRx86Vl0JgWpCqIsKQoKaKSA09lU_0',
      }
    }

    componentDidMount() {

        axios.get("https://sandbox.tatum.io/api/v1/customer", this.config)
          .then(res => {
            const customers = res.data;
            this.setState({ customers });
          })
      }

     render() {
        return (
          <div>
            { this.state.customers.map((customer,i) => 
             <div key={i}>{customer.externalId}</div>
            )}
          </div>
        )
      }
}
 
export default ClientsList;