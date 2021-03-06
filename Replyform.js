import React from 'react';
import ReactDOM from 'react-dom';
import Commentsinglereply from './Commentsinglereply';

let commentsDataArrayReply = [];
let initTemp = 0;

class Replyform extends React.Component{

	constructor(){
		super();
		this.state = {
			userName: '',
			userComment: '',
			commentsDataArrayReplyState: []
		};
	}

	nameChangeReply(e){
		this.setState({
			userNameReply: e.target.value
		});
	}

	commentChangeReply(e){
		this.setState({
			userCommentReply: e.target.value
		});
	}

	addCommentReply(e, idVar){
		e.preventDefault();
		initTemp = initTemp + 1;
		var currDate, currMonth, currYear, currHour, currMin, currSec, totaltime = "";
		var currentdate = new Date();

		totaltime = currentdate.getDate()+"/"
					+currentdate.getMonth()+"/"
					+currentdate.getFullYear()+" @ "
					+currentdate.getHours()+":"
					+currentdate.getMinutes();

		let dataObject = {
			id : initTemp,
			name : this.state.userNameReply,
			commenttext : this.state.userCommentReply,
			commenttime : totaltime
		};

		commentsDataArrayReply.push(dataObject);

		this.setState({
			commentsDataArrayReplyState : commentsDataArrayReply
		})

		if(this.state.applyReply == false){
			this.setState({
				applyReply : true
			})
		}else{
			this.setState({
				applyReply : false
			})
		}

		document.getElementById("userNameReply").value = "";
		document.getElementById("userCommentReply").value = "";

	}

	render(){
		return <div className="row">
					<div className="col-lg-6">
		    		<div className="col-lg-12">

			    		{this.state.commentsDataArrayReplyState.map((commentitem)=>{
				        	return	<Commentsinglereply comments={commentitem} key={commentitem.id}/> 
				        })}

		    			

		    			<form className="form-horizontal">
					    	<h5>Your Reply...</h5>
						    <div className="form-group col-lg-12">
						    	<input type="text" id="userNameReply" name="userNameReply" className="form-control" placeholder="Your Name" onChange={this.nameChangeReply.bind(this)} />
						    </div>
						    <div className="form-group col-lg-12">
						        <textarea id="userCommentReply" name="userCommentReply" className="form-control" placeholder="Write your reply here..." onChange={this.commentChangeReply.bind(this)} ></textarea>
						    </div>
						    <div className="form-group col-lg-12">
						    	<span className="input-group-btn">     
						            <button id={this.props.commentId.name} onClick={this.addCommentReply.bind(this)} className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-comment"></span> Post Reply</button>
						        </span>
						    </div>
					    </form>
		    		</div>
			    	</div>
				</div>
	}
}

export default Replyform