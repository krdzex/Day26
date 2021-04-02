import axios from 'axios';
import React from 'react';
class GetRequestSetHeaders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackages: null };
    }
    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">
                    GET Request with Set Headers
                </h5>
                <div className="card-body">
                    Total packages: {totalReactPackages}
                </div>
            </div>
        );
    }
    componentDidMount() {
        const headers = { 'Content-Type': 'application/json' };
        axios.get('https://api.npms.io/v2/search?q=react', { headers })
            .then(response => this.setState({ totalReactPackages: response.data.total }));
    }

}
export default GetRequestSetHeaders;