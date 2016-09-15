import React from 'react';

class Commentsinglereply extends React.Component{

	render(){
		console.log(this.props.comments);
		return	<div className="col-lg-12">
			        <strong className="pull-left primary-font">{this.props.comments.name}</strong>
			        <small className="pull-right text-muted">
			        <span className="glyphicon glyphicon-time"></span>{this.props.comments.commenttime}</small><br/>
			        <p>{this.props.comments.commenttext}</p>
		        </div>
	}
}

export default Commentsinglereply