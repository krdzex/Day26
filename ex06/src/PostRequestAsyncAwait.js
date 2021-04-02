import axios from 'axios';
import React from 'react';
class PostRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articleId: null };
    }
    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Async/Await</h5>
                <div className="card-body">
                    Article Id: {articleId}
                </div>
            </div>
        );
    }
    async componentDidMount() {
        const article = { title: 'React POST Request Example' };
        const response = await axios.post('https://reqres.in/api/articles', article);
        this.setState({ articleId: response.data.id });
    }
}
export default PostRequestAsyncAwait;