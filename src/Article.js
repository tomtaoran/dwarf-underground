import React, { Component } from 'react';
import './Article.css'
import Avatar from './Avatar'
import Articlestart from './Articlestart'
import Interject from './Interject'
import ArticleLinks from './ArticleLinks'

class Article extends Component{
    
    render(){
        return ( <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <Avatar></Avatar>
        <section className="article-body">
          <Articlestart></Articlestart>
          <Interject></Interject>
          </section>
        <ArticleLinks></ArticleLinks>
      </div>)
    }
}
export default Article