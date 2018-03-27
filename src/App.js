import React, { Component } from 'react';
import { connect } from 'react-redux';

import Car from './Elements/Car';
import Zoom from './Elements/Zoom';
import BlockDetail from './Elements/BlockDetail';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="wrapper">
            <div className="header">
              <div className="header__arrow"></div>
              <div className="header__block-data">
                <div className="block-data__type">Повреждения</div>
                <div className="block-data__model">Участник "А" VW Polo</div>
              </div>
              <div className="header__graph"></div>
            </div>

            <div className="main">
              <div className={this.props.testStore.classErrorMessage} >
                {this.props.testStore.message}
              </div>

              <div className="main__block-active">
                <div className="block-active__wrapper-car">
                  <Car />
                </div>
                <Zoom />
              </div>

              <BlockDetail />

              <button className="main__button-next">Следующий шаг</button>
            </div>  
            
          </div>
        </div>   
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);

