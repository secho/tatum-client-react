import React from 'react';

class ClientDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <button onClick={this.props.handleClick(this.props.country)}>{this.props.country}</button>
        </div> );
    }
}
 
export default ClientDetail;