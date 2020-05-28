import React from 'react';
import './Article.css';

const Article = (props) => {
    return (
        <article>
            <div className="article--image">
                <img src={props.image} alt="" className="imageArticle"/>
            </div>
            <div className="article--side">
                <div className="article--title">
                    <p>{props.title}</p>
                </div>
                <div className="article--desc">
                    <p>{props.desc}</p>
                </div>
            </div>
        </article>
    )
}

Article.defaultProps = {
    title: 'Undefined'
}

export default Article