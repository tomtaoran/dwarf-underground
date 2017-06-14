import React, { Component } from 'react';
import './Comments.css'

class Comments extends Component {
    constructor(){
        super()
        this.state ={
            comment:'',
            comments: []
        }
    }

    updateComment(ev){
        this.setState({
            comment:ev.target.value
        })
    }

    addComment(ev){
        const comment={
            timestamp: new Date(),
            text: this.state.comment
        }
        const state = {...this.state}
        state.comments.push(comment)
        state.comment=''
        this.setState(state)

    }

    render(){
        return(
            <div className="comments">
                <textarea value={this.state.comment} onChange={this.updateComment.bind(this)} placeholder="Enter comment here"></textarea>
                <button className="button" onClick={this.addComment.bind(this)}> Submit Commit </button>
            {this.state.comments.map((comment,i)=><Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

function Comment (props){
    return (<div className="comment">
        <div>{props.comment.text}</div>
        </div>
    )
}

export default Comments