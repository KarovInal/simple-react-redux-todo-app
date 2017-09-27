import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as AddAction from '../actions/AddAction';
import * as onChecked from '../actions/checked';
import AddElem from './AddElem';
import List from '../components/List';


class App extends Component {
    
    render () {
        const { 
            addItemToList, 
            deleteItemToList, 
            updateItemToList 
        } = this.props.AddAction;

        const { onChangeChecked } = this.props.onChecked;

        return (
            <div className='container'>
                <AddElem 
                    dataItems={this.props.items}
                    addItemToList={addItemToList}
                    onChangeChecked={onChangeChecked}
                    isChecked={this.props.isChecked}
                />
                
                <List 
                    dataItems={this.props.items}  
                    deleteItemToList={deleteItemToList} 
                    updateItemToList={updateItemToList}
                    isChecked={this.props.isChecked}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        items: state.item,
        isChecked: state.isChecked
    }
}


function mapDispatchToProps(dispatch) {
    return {
        AddAction: bindActionCreators(AddAction, dispatch),
        onChecked: bindActionCreators(onChecked, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);