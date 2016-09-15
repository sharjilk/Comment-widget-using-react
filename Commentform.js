import React from 'react';
import ReactDOM from 'react-dom';
import Commentlist from './Commentlist'

let commentsDataArray = [];
var initTemp = 0;

class Commentform extends React.Component{

	constructor(){
		super();
		this.state = {
			userName: '',
			userComment: ''
		};
	}

	nameChange(e){
		this.setState({
			userName: e.target.value
		});
	}

	commentChange(e){
		this.setState({
			userComment: e.target.value
		});
	}

	addComment(e){
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
			name : this.state.userName,
			commenttext : this.state.userComment,
			commenttime : totaltime
		};

		commentsDataArray.push(dataObject);
		ReactDOM.render(<Commentform comments={commentsDataArray} />, document.getElementById('MainApp'));
	}

	render(){
		return <div id="" className="col-lg-12">
				    <div className="well">
					    <Commentlist comments={this.props.comments} />
					    <div className="row">
					    	<div className="col-lg-6">
					    		<form className="form-horizontal">
							    	<h4>Join the Discussion...</h4>
								    <div className="form-group col-lg-12">
								    	<input type="text" name="userName" className="form-control" placeholder="Your Name" onChange={this.nameChange.bind(this)} />
								    </div>
								    <div className="form-group col-lg-12">
								        <textarea name="userComment" className="form-control" placeholder="Write your comment here..." onChange={this.commentChange.bind(this)} ></textarea>
								    </div>
								    <div className="form-group col-lg-12">
								    	<span className="input-group-btn">     
								            <button onClick={this.addComment.bind(this)} className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-comment"></span> Add Comment</button>
								        </span>
								    </div>
							    </form>
					    	</div>
					    </div>
				    </div>
				</div>
	}
}

export default Commentform