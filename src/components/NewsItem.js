import React, { Component } from 'react'
import Loading from './Loading'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, content } = this.props
        return (
            <div className="card h-100">
                { imageUrl ? <img src={imageUrl} className="card-img-top" alt="..." loading="lazy"/>
                  : <Loading/> }
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description?description:content}</p>
                    <a target='_blank' rel="noreferrer" href={newsUrl} className="btn btn-primary">Read More</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small>
                </div>
            </div>
        )
    }
}
