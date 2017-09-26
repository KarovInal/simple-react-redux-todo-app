import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as AddAction from '../actions/AddAction';
import AddElem from './AddElem';


class App extends Component {
    
    render () {
        const { addItemToList } = this.props.AddAction;

        return (
            <div className='container'>
                <AddElem addItemToList={addItemToList}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        items: state.AddReducer
    }
}


function mapDispatchToProps(dispatch) {
    return {
        AddAction: bindActionCreators(AddAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);