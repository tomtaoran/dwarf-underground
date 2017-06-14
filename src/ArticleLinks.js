import React, { Component } from 'react';
import './ArticleLinks.css'
class ArticleLinks extends Component{
    constructor() {
        super()
        this.state = {
            clicked: "false",
            comments: [],
        }
    }

    handleClick(ev) {
    ev.preventDefault()
    const clicked=!this.state.clicked
    this.setState({ clicked })
    }
  
    handleSubmit(ev) {
        ev.preventDefault()
        const comments = [...this.state.comments]
        comments.push(this.commentInput.value)
        this.setState({ comments })
        ev.currentTarget.reset()
    }


    renderComment(comment, i) {
    return <li key={i}>{comment}</li>
  }


    render(){if(!this.state.clicked){
       return ( 
          <div className="article-links">
          <a className="article-link" href="#" onClick={this.handleClick.bind(this)}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
          <div>
              <ul className="no-bullet">
              {this.state.comments.reverse().map(this.renderComment)}
              </ul>
              <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="Write your comment here..." ref={(input) => this.commentInput = input}/>      
              </form>
          </div>
          <a className="article-link" href="#">
          <i className="fa fa-share"></i>
          <span className="article-link-text">Share Post</span>
          </a>
        </div>)
    }else{
       return ( 
          <div className="article-links">
          <a className="article-link" href="#" onClick={this.handleClick.bind(this)}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
          <div>
            <ul className="no-bullet">
            {this.state.comments.reverse().map(this.renderComment)}
            </ul>
          </div>
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
        </div>)
    }
       
    }
}
export default ArticleLinks