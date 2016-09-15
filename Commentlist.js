import React from 'react';
import Commentsingle from './Commentsingle'

class Commentlist extends React.Component{
	render(){
		return <ul id="sortable" className="list-unstyled ui-sortable">
			        {this.props.comments.map((commentitem)=>{
			        	return	<Commentsingle comments={commentitem} key={commentitem.id}/> 
			        })}
			    </ul>
	}
}

export default Commentlist