import React from 'react';
import ReactDOM from 'react-dom';
import Commentform from './Commentform';

/*let commentsData = [
	{
		id : 1,
		name : 'Sharjil',
		commenttext : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id : 2,
		name : 'Jeff',
		commenttext : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		id : 3,
		name : 'Ross',
		commenttext : 'Exercitation ullamco laboris nisi ut aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex ea commodo consequat.'
	},
	{
		id : 4,
		name : 'Amanda',
		commenttext : 'Acitation ullamco laboris nisi ut aliq uipexercita tion ullamco laboris nisi ut aliquipexer citation ullamco laboris nisi ut aliquipexer citation ullamco laboris nisi ut aliquip'
	}
]*/

let commentsData = [];


ReactDOM.render(<Commentform comments={commentsData} />, document.getElementById('MainApp'));