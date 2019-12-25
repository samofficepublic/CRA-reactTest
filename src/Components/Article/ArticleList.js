import React, { Component } from 'react';
import AxiosConfig from '../../Axios/AxiosConfig';
import ArticleItem from './ArticleItem';

class ArticleList extends Component {
    state = {
        Article: []
    }

    getArticles = () => {
        AxiosConfig.get("Article/GetArticles")
            .then(Response => (
                this.setState({ Article: Response.data })
            ))
            .catch(error => (
                console.log(error)
            ))
    }

    renderArticles = () => {
        return this.state.Article.map(item => (
            <ArticleItem key={item.id} {...item} />
        ))
    }

    render() {
        return (
            <div>
                {this.renderArticles()}
            </div>
        );
    }

    componentDidMount() {
        this.getArticles();
    }
}

export default ArticleList;