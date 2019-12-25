import React, { Component } from 'react';

class ArticleItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>

                <p>{this.props.body}</p>
                <hr />
            </div>
        );
    }
}

export default ArticleItem;