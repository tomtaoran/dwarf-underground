import React, { Component } from 'react';
import './OtherArticle.css'


class OtherArticle extends Component {
    render(){
        return ( <div className={this.props.divName}> 
                    <a href={this.props.aHref}> 
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} /> 
                    <p>{this.props.pContent}</p> 
                    </a>   
                </div> 

            )
    }
}
export default OtherArticle