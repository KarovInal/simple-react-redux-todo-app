import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as AddAction from '../actions/AddAction';
import AddElem from './AddElem';
import List from '../components/List';


class App extends Component {
    
    render () {
        const { addItemToList } = this.props.AddAction;
        // const { items } = this.props;

        return (
            <div className='container'>
                <AddElem addItemToList={addItemToList} dataItems={this.props.items} />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        items: state.item
    }
}


function mapDispatchToProps(dispatch) {
    return {
        AddAction: bindActionCreators(AddAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);