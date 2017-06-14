import React, { Component } from 'react';
import './ArticleLinks.css'
import Comments from './Comments'

class ArticleLinks extends Component{
    constructor() {
        super()
        this.state = {
            clicked: "false",
            comments: [],
        }

        // this.renderCommit = this.renderCommit.bind(this) // Hey, we can bind this at constructor level
    }

    handleClick(ev) {
    ev.preventDefault()
    const clicked=!this.state.clicked
    this.setState({ clicked })
    }
  
    handleSubmit(ev) {
        ev.preventDefault()
        const comments = [...this.state.comments]
        comments.unshift(this.commentInput.value)
        this.setState({ comments }) // this.setState({state setting}, ()=>{}) The second function will be done AFTER the first state setting argument is complete
        //Note that setState is Asycronous, it happened unpredictablely
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
          
          <a className="article-link" href="#">
          <i className="fa fa-share"></i>
          <span className="article-link-text">Share Post</span>
          </a>
        <div>
          <br></br>
            <Comments />
              {/* This is my Old Way
              <ul className="no-bullet">
              {this.state.comments.map(this.renderComment)}
              </ul>
              <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="Write your comment here..." ref={(input) => this.commentInput = input}/>      
              </form>*/}
          </div>
          </div>)
    }else{
       return ( 
          <div className="article-links">
          <a className="article-link" href="#" onClick={this.handleClick.bind(this)}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
         
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
         <div>
           {/*This is my old way
            <ul className="no-bullet">
            {this.state.comments.map(this.renderComment)}
            </ul>*/} 
          </div>
          </div>)
    }
       
    }
}
export default ArticleLinks