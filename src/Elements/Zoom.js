import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store/state';

class Zoom extends Component {
	render() {
	  return (
	    <div className="block-active__block-zoom">
	    	<button className="block-zoom__increase" onMouseDown={onIncrement} onMouseUp={stopZoom}>
	    		+
	    	</button>
	      <button className="block-zoom__decrease" onMouseDown={onDecrement} onMouseUp={stopZoom}>
	      	&minus;
	      </button>
	    </div>
	  );
	}
}
	
var timerId;

function onIncrement() { 
		timerId = setInterval(function() {
			store.dispatch({type: 'INCREMENT_ZOOM',});
		}, 100);
}

function onDecrement() {
	timerId = setInterval(function() {
		store.dispatch({type: 'DECREMENT_ZOOM',});
	}, 100);
}

function stopZoom() {
	clearInterval(timerId);
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Zoom);
