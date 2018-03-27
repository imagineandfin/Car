import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store/state';

class BlockDetail extends Component {
  render() {
  	const children = [];

  	const removeDetail = (idDetail) => {
			store.dispatch({type: 'REMOVE_DETAIL', payload: idDetail.target.id});
		}

  	const ParentComponent = props => (
		  <div className="main__block-detail">
		    {props.children}
		  </div>);

		const ChildComponent = props => (
			<div className="block-detal__element">
			  <div className="element__detail">{this.props.testStore.addedDetail[props.number]}</div>
			  <div onClick={removeDetail} id={props.number} className="element__close">&times;</div>
			</div>);

  	for (let i = 0; i < this.props.testStore.addedDetail.length; i++) {
      children.push(<ChildComponent key={i} number={i} />);
    };
  
    return (
    	<ParentComponent>
    		{children}
    	</ParentComponent>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(BlockDetail);
