import axios from 'axios';
import React from 'react';
class PostRequestSetHeaders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articleId: null };
    }
    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">
                    Article Id: {articleId}
                </div>
            </div>
        );
    }
    componentDidMount() {

        const article = {
            title: 'React POST Request Example'
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'footbar'
        };
        axios.post('https://reqres.in/api/articles', article, { headers })
            .then(response => this.setState({ articleId: response.data.id }));
    }
}
export default PostRequestSetHeaders;
