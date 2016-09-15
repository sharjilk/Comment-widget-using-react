import React from 'react';
import Replyform from './Replyform';

class Commentsingle extends React.Component{

	constructor(){
		super();
		this.state = {
			showForm : false,
			replyText : "Reply"
		};
	}
	
	showReplyForm(){
		if(this.state.showForm == false){
			this.setState({
				showForm : true
			})
		}
	}

	render(){
		return <li className="ui-state-default">
	        		<strong className="pull-left primary-font">{this.props.comments.name}</strong>
			        <small className="pull-right text-muted">
			        <span className="glyphicon glyphicon-time"></span>{this.props.comments.commenttime}</small><br/>
			        <p>{this.props.comments.commenttext}</p>
			        { this.state.showForm ? <Replyform commentId={this.props.comments} /> : null }
			        <div className="btn-group btn-group-xs">
			        	{ this.state.showForm ? null : <button onClick={this.showReplyForm.bind(this)} className="btn btn-default">{this.state.replyText}</button> }
			        </div>
			        <hr/> 
		        </li>
	}
}

export default Commentsingle