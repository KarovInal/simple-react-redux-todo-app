import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as AddAction from '../actions/AddAction';
import AddElem from './AddElem';
import List from '../components/List';


class App extends Component {
    
    render () {
        const { addItemToList, deleteItemToList, updateItemToList } = this.props.AddAction;

        return (
            <div className='container'>
                <AddElem addItemToList={addItemToList} />
                <List 
                    dataItems={this.props.items}  
                    deleteItemToList={deleteItemToList} 
                    updateItemToList={updateItemToList}
                />
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